async function fetchDiscoverMovies() {
  const moviesRes = await fetch(
    `https://api.themoviedb.org/3/discover/movie?page=2&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const genresRes = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const moviesData = await moviesRes.json();
  const genresData = await genresRes.json();

  return moviesData.results.map((movie: any) => {
    return {
      ...movie,
      genres: movie.genre_ids.map(
        (id: number) =>
          genresData.genres.find((genre: any) => genre.id === id).name
      ),
    };
  });
}

export default fetchDiscoverMovies;
