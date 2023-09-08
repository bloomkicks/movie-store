function sortMoviesBy(movies: any[], sortBy?: string): any[] {
  if (!sortBy || sortBy === "none") return movies;

  if (sortBy === "by-popularity") {
    return movies.sort(
      (a: any, b: any) => b.popularity - a.popularity
    );
  }
  if (sortBy === "by-budget") {
    return movies.sort((a: any, b: any) => b.budget - a.budget);
  }
  if (sortBy === "by-rating") {
    return movies.sort(
      (a: any, b: any) => b.vote_average - a.vote_average
    );
  }

  return movies;
}

export default sortMoviesBy;
