import type { MovieDetails, MovieSummary } from "@/models/movie";

function transformMovieObject(
  movie: any,
  genres?: any[],
  isDetails?: boolean,
  cast?: any[]
): MovieSummary | MovieDetails {
  return {
    posterSrc: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    title: movie.title,
    year: movie.release_date.split("-")[0],
    id: movie.id,
    genres: isDetails
      ? movie.genres.map((genre: any) => genre.name)
      : genres
      ? movie.genre_ids.map(
          (id: number) =>
            genres.find((genre: any) => genre.id === id).name
        )
      : undefined,
    overview: isDetails ? movie.overview : undefined,
    productionCountries: isDetails
      ? movie.production_countries.map((country: any) => country.name)
      : undefined,
    budget: isDetails ? movie.budget : undefined,
    revenue: isDetails ? movie.revenue : undefined,
    rating: isDetails ? movie.vote_average : undefined,
    popularity: isDetails ? movie.popularity : undefined,
    cast: isDetails
      ? cast?.map((actor: any) => actor.name)
      : undefined,
  };
}

export default transformMovieObject;
