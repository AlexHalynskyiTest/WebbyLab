import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import { persistedUserReducer } from './slices/userSlice'
import { persistedMoviesReducer } from './slices/moviesSlice'

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    movies: persistedMoviesReducer,
  },
  middleware: [thunk]
})

export const persistor = persistStore(store)
