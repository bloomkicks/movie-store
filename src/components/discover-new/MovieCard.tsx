import Link from "next/link";
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

  return (
    <Link href={"/" + id} passHref legacyBehavior>
      <Card
        component="a"
        title="Learn more"
        className={`${classes.movieCard} ${
          isDetailed ? classes.detailed : ""
        }`}
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
    </Link>
  );
};

export default MovieCard;
