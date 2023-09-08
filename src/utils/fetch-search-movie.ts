function fetchSearchMovie(search: string) {
  return async function () {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    return res.json();
  };
}

export default fetchSearchMovie