import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    loading: 'idle',
    movies: [],
  },
  reducers: {
    moviesLoading(state) {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    setMovies(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.movies = action.payload
      }
    },
    logoutMovies(state) {
      state.movies = []
    },
  },
});

const persistConfig = {
  key: 'movies',
  storage,
}

export const persistedMoviesReducer = persistReducer(persistConfig, moviesSlice.reducer)

export const { moviesLoading, setMovies, logoutMovies } = moviesSlice.actions;
