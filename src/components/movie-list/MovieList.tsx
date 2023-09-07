"use client";

import fetchMovies from "@/utils/fetch-movies";
import { useQuery } from "react-query";
import MovieCard from "./MovieCard";
import classes from "./MovieList.module.scss";

const MovieList = () => {
  const { status, data, error } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
    initialData: { movies: [], genres: {} },
  });

  return (
    <div className={classes.movieList}>
      {data!.movies.map((movie: any) => {
        return (
          <MovieCard
            key={movie.id}
            posterSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.title}
            year={movie.release_date.split("-")[0]}
            genres={movie.genre_ids.map(
              (id: number) =>
                data!.genres.find((genre: any) => genre.id === id)
                  .name
            )}
            id={movie.id}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
