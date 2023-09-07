async function fetchMovies() {
  const moviesRes = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`
  );
  const genresRes = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}`
  );
  const moviesData = await moviesRes.json();
  const genresData = await genresRes.json();

  return { movies: moviesData.results, genres: genresData.genres };
}

export default fetchMovies;
