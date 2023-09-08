export interface MovieSummary {
  posterSrc: string;
  title: string;
  year: string;
  id: number;
  genres?: string[];
  popularity?: number;
  rating?: number;
}

export interface MovieDetails extends MovieSummary {
  genres: string[];
  overview: string;
  productionCountries: string[];
  budget: number;
  revenue: number;
  popularity: number;
  rating: number;
  cast: string[];
}
