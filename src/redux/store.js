import { configureStore } from '@reduxjs/toolkit'
import { persistedUserReducer } from './slices/userSlice'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
  middleware: [thunk]
})

export const persistor = persistStore(store)
