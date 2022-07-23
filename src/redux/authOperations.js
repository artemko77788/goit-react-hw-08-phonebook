import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.default.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.default.headers.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async cridentials => {
  try {
    const { data } = await axios.post('/users/signup', cridentials);
    token.set(data.token);

    return data;
  } catch (error) {}
});

const logIn = createAsyncThunk('auth/login', async cridentials => {
  try {
    const { data } = await axios.post('/users/login', cridentials);
    // token.set(data.token);

    return data;
  } catch (error) {}
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {}
});

export const authOperations = {
  logIn,
  register,
  logOut,
};
