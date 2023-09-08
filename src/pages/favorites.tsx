import MovieList from "../components/discover-new/MovieList";
import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import classes from "./favorites.module.scss";

const FavoritesPage = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites
  );

  return (
    <main className={classes.favorites}>
      <h1>Your Favorites</h1>
      <div>
        {favorites.length ? (
          <MovieList movies={favorites} status="success" />
        ) : (
          <p>You havent added any favorites yet</p>
        )}
      </div>
    </main>
  );
};

export default FavoritesPage;
