// import { createApi } from '@reduxjs/toolkit/query/react';
// import axios from 'axios';

// const axiosBaseQuery = ({ baseUrl } = { baseUrl: '' }) => async ({
//   url,
//   method,
//   body: data,
//   params,
// }) => {
//   try {
//     const result = await axios({
//       url: baseUrl + url,
//       method,
//       body: data,
//       params,
//     });

//     return { data: result.data };
//   } catch (axiosError) {
//     let err = axiosError;
//     return {
//       error: {
//         status: err.response?.status,
//         data: err.response?.data || err.message,
//       },
//     };
//   }
// };

// export const authApi = createApi({
//   reducerPath: 'auth',
//   baseQuery: axiosBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com/users',
//   }),
//   tagTypes: ['Post'],
//   endpoints: builder => ({
//     login: builder.mutation({
//       query: data => ({
//         url: `/signup`,
//         method: 'post',
//         body: data,
//       }),
//     }),
//   }),
// });

// export const { useLoginMutation } = authApi;

import { createSlice } from '@reduxjs/toolkit';
import { logIn, register } from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
    password: null,
  },
  token: null,
  isLoggedIn: false,
};

const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
  },
});

export default authSlise.reducer;
