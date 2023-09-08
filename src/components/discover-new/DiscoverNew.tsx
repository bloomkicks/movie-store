import type { MovieSummary } from "@/models/movie";
import fetchDiscoverMovies from "@/utils/fetch-discover-movies";
import sortMoviesBy from "@/utils/sort-movies-by";
import filterMovies from "@/utils/filter-movies";
import transformMovieObject from "@/utils/transform-movie-object";

import { useQuery } from "react-query";
import { useState } from "react";
import MovieList from "./MovieList";
import SortFilter from "./SortFilter";
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

  const { status, data, error } = useQuery({
    queryKey: ["discoverMovies"],
    queryFn: fetchDiscoverMovies,
  });

  let movies: MovieSummary[] = data
    ? sortMoviesBy(filterMovies(data, filter), sortBy).map(
        (movie: any) => transformMovieObject(movie)
      )
    : [];

  return (
    <article className={classes.discoverNew}>
      <h1>Discover New</h1>
      <SortFilter
        sortHandler={sortHandler}
        filterHandler={filterHandler}
      />
      <MovieList movies={movies} status={status} error={error} />
    </article>
  );
};

export default DiscoverNew;
