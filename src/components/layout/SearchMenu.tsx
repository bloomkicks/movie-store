import fetchSearchMovie from "@/utils/fetch-search-movie";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import classes from "./SearchMenu.module.scss";
import Link from "next/link";

const SearchMenu = ({ open }: { open: boolean }) => {
  const [results, setResults] = useState<
    { id: number; title: string }[]
  >([]);
  const inputRef = useRef(null);

  function changeHandler() {
    let timeout: NodeJS.Timeout;
    return function (e: ChangeEvent<HTMLInputElement>) {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        const search = e.target.value;
        console.log(search);
        fetchSearchMovie(search)().then((data) =>
          setResults(
            data.results.map((movie: any) => ({
              id: movie.id,
              title: movie.title,
            }))
          )
        );
      }, 500);
    };
  }

  function submitHandler(e: FormEvent) {
    e.preventDefault();
    console.log(
      (inputRef.current as unknown as HTMLInputElement).value
    );

    fetchSearchMovie(
      (inputRef.current as unknown as HTMLInputElement).value
    )().then((data) =>
      setResults(
        data.results.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
        }))
      )
    );
  }

  return (
    <div
      className={`${classes.searchMenu} ${
        open ? classes.active : ""
      }`}
    >
      <form
        action="POST"
        onSubmit={submitHandler}
        className={classes.searchForm}
      >
        <input
          type="text"
          placeholder="Search for movie..."
          onChange={changeHandler()}
          ref={inputRef}
        />
        <button type="submit">Search</button>
      </form>
      <div className={classes.results}>
        {results.map((res: any) => (
          <Link
            href={`/${res.id}`}
            passHref
            legacyBehavior
            key={res.id}
          >
            <a>{res.title}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchMenu;
