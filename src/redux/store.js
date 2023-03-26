import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import { persistedUserReducer } from './slices/userSlice'
import { default as moviesReducer } from './slices/moviesSlice'
import { default as curMovieReducer } from './slices/curMovieSlice'

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    movies: moviesReducer,
    curMovie: curMovieReducer,
  },
  middleware: [thunk]
})

export const persistor = persistStore(store)
