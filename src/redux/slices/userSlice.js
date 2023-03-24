import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  email: null,
  name: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
    removeUser(state) {
      state.email = null;
      state.name = null;
    },
  },
});

const persistConfig = {
  key: 'user',
  storage,
}

export const persistedUserReducer = persistReducer(persistConfig, userSlice.reducer)

export const { setUser, removeUser } = userSlice.actions;
