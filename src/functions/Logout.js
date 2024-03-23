import { useAuthDispatch } from '../authContext';

export const logout = () => {
 const dispatch = useAuthDispatch();
 localStorage.removeItem('jwt_token');
 localStorage.removeItem('username');
 dispatch(logout());
};
