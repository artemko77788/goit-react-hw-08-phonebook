import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/register', async cridentials => {
  try {
    const { data } = await axios.post('/users/signup', cridentials);

    return data;
  } catch (error) {}
});

export const logIn = createAsyncThunk('auth/login', async cridentials => {
  try {
    const { data } = await axios.post('/users/login', cridentials);

    return data;
  } catch (error) {}
});
