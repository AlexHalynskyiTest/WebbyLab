import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    loading: 'idle',
    movies: [],
    moviesTotal: 0,
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
        state.movies = action.payload.data
        state.moviesTotal = action.payload.meta.total
      }
    },
  },
});

export const { moviesLoading, setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
