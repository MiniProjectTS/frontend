// src/AuthContext.js
import React, { createContext, useContext, useReducer } from 'react';
import authReducer from './store/authReducer';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

export const AuthProvider = ({ children }) => {
 const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    jwtToken: null,
    username: null,
 });

 return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
 );
};

export const useAuth = () => {
 const context = useContext(AuthStateContext);
 if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
 }
 return context;
};

export const useAuthDispatch = () => {
 const context = useContext(AuthDispatchContext);
 if (context === undefined) {
    throw new Error('useAuthDispatch must be used within an AuthProvider');
 }
 return context;
};
