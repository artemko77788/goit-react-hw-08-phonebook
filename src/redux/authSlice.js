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
import { authOperations } from './authOperations';

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
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null, password: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.refreshCurentPage.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export default authSlise.reducer;
