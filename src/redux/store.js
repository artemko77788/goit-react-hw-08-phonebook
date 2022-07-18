import { configureStore } from '@reduxjs/toolkit';
import { contactFilter } from './contactSlice';
import { contactsApi } from './api';

const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [contactFilter.name]: contactFilter.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

export default store;
