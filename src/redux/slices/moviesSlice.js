import { createSlice } from '@reduxjs/toolkit';

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
  },
});

export const { moviesLoading, setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
