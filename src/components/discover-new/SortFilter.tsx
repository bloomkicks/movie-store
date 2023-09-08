import classes from "./SortFilter.module.scss";

const SortFilter = ({
  sortHandler,
  filterHandler,
}: {
  sortHandler: (str: string) => void;
  filterHandler: (str: string) => void;
}) => {
  function onFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    const filter = e.target.value;
    filterHandler(filter);
  }
  function onSort(e: React.ChangeEvent<HTMLSelectElement>) {
    const sortBy = e.target.value;
    sortHandler(sortBy);
  }
  return (
    <div className={classes.container}>
      <div className={classes.sortList}>
        <img src="/icons/sort.svg" alt="" width={34} height={22} />
        <select defaultValue="none" onChange={onSort} name="sort-by">
          <option value="none" disabled>
            Sort by
          </option>
          <option value="by-popularity">By popularity</option>
          <option value="by-rating">By rating</option>
          <option value="by-budget">By budget</option>
        </select>
      </div>
      <div className={classes.filterList}>
        <img src="/icons/filter.svg" alt="" width={34} height={22} />
        <select
          defaultValue="none"
          onChange={onFilter}
          name="filter-by"
        >
          <option value="none" disabled>
            Filter
          </option>
          <option value="horror">Horror</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="drama">Drama</option>
        </select>
      </div>
    </div>
  );
};

export default SortFilter;
