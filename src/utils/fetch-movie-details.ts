import type { MovieDetails } from "@/models/movie";

async function fetchMovieDetails({
  queryKey,
}: {
  queryKey: string[];
}) {
  const detailsRes = await fetch(
    `https://api.themoviedb.org/3/movie/${queryKey[1]}?api_key=${process.env.API_KEY}`
  );
  const creditsRes = await fetch(
    `https://api.themoviedb.org/3/movie/${queryKey[1]}/credits?api_key=${process.env.API_KEY}`
  );
  const details = await detailsRes.json();
  const credits = await creditsRes.json();

  return { details, cast: credits.cast };
}

export default fetchMovieDetails;
