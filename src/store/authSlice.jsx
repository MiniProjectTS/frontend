import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    jwtToken: null,
    username: null,
   };

   const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
       login: (state, action) => {
         state.isAuthenticated = true;
         state.jwtToken = action.payload.jwtToken;
         state.username = action.payload.username;
       },
       logout: (state) => {
         state.isAuthenticated = false;
         state.jwtToken = null;
         state.username = null;
       },
    },
   });

   export const { login, logout } = authSlice.actions;

export default authSlice.reducer;