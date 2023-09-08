import type { MovieSummary } from "@/models/movie";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: MovieSummary[] = [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(
      state: MovieSummary[],
      action: PayloadAction<MovieSummary>
    ) {
      state.push(action.payload);
    },
    removeFromFavorites(
      state: MovieSummary[],
      action: PayloadAction<number>
    ) {
      return state.filter(
        (movie: MovieSummary) => movie.id !== action.payload
      );
    },
  },
});

export const favoritesActions = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
