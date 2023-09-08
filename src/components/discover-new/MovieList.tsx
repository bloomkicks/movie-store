import Spinner from "../ui/Spinner";
import ErrorMessage from "../ui/ErrorMessage";
import filterMovies from "@/utils/filter-movies";
import sortMoviesBy from "@/utils/sort-movies-by";
import { useQuery } from "react-query";
import MovieCard from "./MovieCard";
import classes from "./MovieList.module.scss";
import transformMovieObject from "@/utils/transform-movie-object";
import fetchDiscoverMovies from "@/utils/fetch-discover-movies";
import { MovieSummary } from "@/models/movie";

const MovieList = ({
  sortBy,
  filter,
}: {
  sortBy?: string;
  filter?: string;
}) => {
  const { status, data, error } = useQuery({
    queryKey: ["discoverMovies"],
    queryFn: fetchDiscoverMovies,
    initialData: [],
  });

  if (status === "loading") return <Spinner />;
  if (status === "error")
    return <ErrorMessage error={error as string} />;

  let movies: MovieSummary[] = sortMoviesBy(
    filterMovies(data, filter),
    sortBy
  ).map((movie: any) => transformMovieObject(movie));

  return (
    <div className={classes.movieList}>
      {movies.map((movie: MovieSummary) => {
        return <MovieCard key={movie.id} {...movie} />;
      })}
    </div>
  );
};

export default MovieList;
