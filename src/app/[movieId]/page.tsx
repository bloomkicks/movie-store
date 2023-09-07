const MoviePage = ({ params }: { params: { movieId: string } }) => {
  return <h1>Movie: {params.movieId}</h1>;
};

export default MoviePage;
