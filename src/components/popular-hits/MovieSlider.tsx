import Spinner from "../ui/Spinner";
import ErrorMessage from "../ui/ErrorMessage";
import type { MovieSummary } from "@/models/movie";
import MovieCard from "../discover-new/MovieCard";
import { useQuery } from "react-query";
import fetchPopularMovies from "@/utils/fetch-popular-movies";
import Slider from "../ui/Slider";
import classes from "./MovieSlider.module.scss";
import transformMovieObject from "@/utils/transform-movie-object";

const MovieSlider = () => {
  const { status, data, error } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: fetchPopularMovies,
  });

  if (status === "loading") return <Spinner />;
  if (status === "error")
    return <ErrorMessage error={error as string} />;

  const movies: MovieSummary[] = data!.movies.map((movie: any) =>
    transformMovieObject(movie, data!.genres)
  );

  return (
    <Slider
      itemWidth={{ mobile: 300, medium: 350 }}
      length={movies.length}
      className={classes.movieSlider}
    >
      {movies.map((movie: MovieSummary) => {
        return <MovieCard key={movie.id} {...movie} />;
      })}
    </Slider>
  );
};

export default MovieSlider;
