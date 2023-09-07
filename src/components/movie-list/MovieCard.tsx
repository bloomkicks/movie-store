import type { MovieSummary } from "@/models/movie";
import Tag from "../ui/Tag";
import MoreIcon from "../ui/MoreIcon";
import Card from "../ui/Card";
import classes from "./MovieCard.module.scss";

const MovieCard = ({
  posterSrc,
  title,
  year,
  id,
  genres,
}: MovieSummary) => {
  const isDetailed = !!genres;

  function clickHandler() {
    console.log(title, id);
  }

  return (
    <Card
      className={`${classes.movieCard} ${
        isDetailed ? classes.detailed : ""
      }`}
      onClick={clickHandler}
    >
      <img src={posterSrc} alt="Изображение не найдено" />
      <h3>
        {title} <span>({year})</span>
      </h3>
      {isDetailed && (
        <div className={classes.genres}>
          {genres.map((genre: string) => (
            <Tag key={genre}>{genre}</Tag>
          ))}
        </div>
      )}
      <MoreIcon className={classes.moreIcon} />
    </Card>
  );
};

export default MovieCard;
