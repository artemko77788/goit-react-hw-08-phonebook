import { contactFilter } from './contactSlice';
import { contactsApi } from './api';
import storage from 'redux-persist/lib/storage';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import authSlise from './authSlice';

const reducers = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  [contactFilter.name]: contactFilter.reducer,
  auth: authSlise,
});

const persistConfig = {
  key: 'auth',
  storage,
  // whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware),
  devTools: true,
});

export const persistor = persistStore(store);
