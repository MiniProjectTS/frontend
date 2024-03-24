// src/authReducer.js
const initialState = {
    isAuthenticated: false,
    jwtToken: null,
    username: null,
   };
   
   const authReducer = (state = initialState, action) => {
    switch (action.type) {
       case 'LOGIN':
         return {
           ...state,
           isAuthenticated: true,
           jwtToken: action
           .payload.jwtToken,
           username: action.payload.username,
         };
       case 'LOGOUT':
         return {
           ...state,
           isAuthenticated: false,
           jwtToken: null,
           username: null,
         };
       default:
         return state;
    }
   };
   
   export default authReducer;