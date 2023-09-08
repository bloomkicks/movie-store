function filterMovies(movies: any[], filter?: string) {
  if (!filter || filter === "none") return movies;
  console.log(movies, filter);

  return movies.filter((movie) =>
    movie.genres.some(
      (genre: string) => genre.toLowerCase() === filter
    )
  );
}

export default filterMovies;
