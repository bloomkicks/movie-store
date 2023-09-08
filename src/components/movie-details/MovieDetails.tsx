import { favoritesActions } from "@/store/favoritesSlice";
import { useSelector, useDispatch } from "react-redux";
import Card from "../ui/Card";
import type { MovieDetails } from "@/models/movie";
import classes from "./MovieDetails.module.scss";
import { RootState } from "@/store";

const MovieDetails = ({
  posterSrc,
  title,
  year,
  genres,
  overview,
  productionCountries,
  budget,
  revenue,
  rating,
  cast,
  id,
}: MovieDetails) => {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites
  );
  const isFavorite = favorites.some((fav) => fav.id === id);

  function toggleFavoritesHandler() {
    if (isFavorite) {
      dispatch(favoritesActions.removeFromFavorites(id));
    } else {
      dispatch(
        favoritesActions.addToFavorites({
          posterSrc,
          title,
          year,
          genres,
          id,
        })
      );
    }
  }

  return (
    <div className={classes.movieDetails}>
      <Card>
        <img src={posterSrc} alt="Изображение не найдено" />
      </Card>
      <h3>
        {title} <span>({year})</span>
      </h3>
      <p>{overview}</p>
      <ul>
        <li>
          <b>Genres:</b> {genres.join(", ")}
        </li>
        <li>
          <b>Rating:</b> {rating.toFixed(1)}
        </li>
        <li>
          <b>Cast:</b> {cast.slice(0, 6).join(", ")}
        </li>
        <li>
          <b>Production Countries:</b>{" "}
          {productionCountries.join(", ")}
        </li>
        <li>
          <b>Budget:</b>{" "}
          {"$" +
            budget
              .toString()
              .split("")
              .toReversed()
              .map((n, i, a) =>
                (i + 1) % 3 === 0 && a.length - 1 !== i ? "." + n : n
              )
              .toReversed()
              .join("")}
        </li>
        <li>
          <b>Revenue:</b>{" "}
          {"$" +
            revenue
              .toString()
              .split("")
              .toReversed()
              .map((n, i, a) =>
                (i + 1) % 3 === 0 && a.length - 1 !== i ? "." + n : n
              )
              .toReversed()
              .join("")}
        </li>
      </ul>
      <button
        className={
          !isFavorite ? classes.addToFav : classes.removeFromFav
        }
        onClick={toggleFavoritesHandler}
      >
        {!isFavorite ? "Add to Favorites" : "Remove from Favorites"}
      </button>
    </div>
  );
};

export default MovieDetails;
