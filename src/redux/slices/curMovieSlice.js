import { createSlice } from '@reduxjs/toolkit';

const curMovieSlice = createSlice({
  name: 'curMovie',
  initialState: {
    loading: 'idle',
    curMovie: {},
  },
  reducers: {
    curMovieLoading(state) {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    setCurMovie(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.curMovie = action.payload
      }
    },
  },
});

export const { curMovieLoading, setCurMovie } = curMovieSlice.actions;

export default curMovieSlice.reducer;
