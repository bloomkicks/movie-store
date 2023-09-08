import { MovieSummary } from "@/models/movie";

import MovieCard from "./MovieCard";
import Spinner from "../ui/Spinner";
import ErrorMessage from "../ui/ErrorMessage";
import classes from "./MovieList.module.scss";

const MovieList = ({
  movies,
  status,
  error,
}: {
  movies: MovieSummary[];
  status: string;
  error?: any;
}) => {
  if (status === "loading") return <Spinner />;
  if (status === "error")
    return <ErrorMessage error={error as string} />;

  return (
    <div className={classes.movieList}>
      {movies.map((movie: MovieSummary) => {
        return <MovieCard key={movie.id} {...movie} />;
      })}
    </div>
  );
};

export default MovieList;
