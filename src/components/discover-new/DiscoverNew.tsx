import SortFilter from "./SortFilter";
import { useState } from "react";
import MovieList from "./MovieList";
import classes from "./DiscoverNew.module.scss";

const DiscoverNew = () => {
  const [filter, setFilter] = useState<string>();
  const [sortBy, setSortBy] = useState<string>();

  function sortHandler(sortSelected: string) {
    setSortBy(sortSelected);
  }
  function filterHandler(filterSelected: string) {
    setFilter(filterSelected);
  }

  return (
    <article className={classes.discoverNew}>
      <h1>Discover New</h1>
      <SortFilter
        sortHandler={sortHandler}
        filterHandler={filterHandler}
      />
      <MovieList sortBy={sortBy} filter={filter} />
    </article>
  );
};

export default DiscoverNew;
