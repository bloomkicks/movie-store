import MovieSlider from "./MovieSlider";
import classes from "./PopularHits.module.scss";

const PopularHits = () => {
  return (
    <article className={classes.popularHits}>
      <h1>Popular Hits</h1>
      <MovieSlider />
    </article>
  );
};

export default PopularHits;
