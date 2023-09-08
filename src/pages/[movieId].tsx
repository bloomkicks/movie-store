import ErrorMessage from "@/components/ui/ErrorMessage";
import Spinner from "@/components/ui/Spinner";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import fetchMovieDetails from "@/utils/fetch-movie-details";
import MovieDetails from "@/components/movie-details/MovieDetails";
import type { MovieDetails as IMovieDetails } from "@/models/movie";
import transformMovieObject from "@/utils/transform-movie-object";

const MoviePage = () => {
  const router = useRouter();
  const movieId = router.query.movieId as string;

  const { status, data, error } = useQuery({
    queryKey: ["movieDetails", movieId],
    queryFn: fetchMovieDetails,
  });

  if (status === "loading") return <Spinner />;
  if (status === "error")
    return <ErrorMessage error={error as string} />;

  const details: IMovieDetails = transformMovieObject(
    data!.details,
    undefined,
    true,
    data!.cast
  ) as IMovieDetails;

  return (
    <main>
      <MovieDetails {...details} />
    </main>
  );
};

export default MoviePage;
