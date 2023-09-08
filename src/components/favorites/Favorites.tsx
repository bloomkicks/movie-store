import MovieCard from "@/components/discover-new/MovieCard";
import { MovieSummary } from "@/models/movie";
import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import classes from "./Favorites.module.scss";

const Favorites = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites
  );

  return (
    <main className={classes.favorites}>
      <h1>Your Favorites</h1>
      <div className={classes.movieList}>
        {favorites.length ? (
          favorites.map((movie: MovieSummary) => (
            <MovieCard key={movie.id} {...movie} />
          ))
        ) : (
          <p>You havent added any favorites yet</p>
        )}
      </div>
    </main>
  );
};

export default Favorites;
