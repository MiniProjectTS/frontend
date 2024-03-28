import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../authContext'; 
import { useAuthDispatch } from '../authContext';

export default function Navbar() {
 const { isAuthenticated } = useAuth(); 
 const dispatch = useAuthDispatch();
 const navigate = useNavigate();
 const location = useLocation();

 const isActive = (path) => location.pathname === path;

 const handleLogout = (e) => {
    e.preventDefault(); 
    dispatch({ type: 'LOGOUT' });

    localStorage.removeItem('jwt_token');
    localStorage.removeItem('username');

    navigate('/');
 }

 return (
    <div className='fixed top-0 left-0 right-0 bg-PrimaryColor drop-shadow-xl z-50'>
      <nav className='flex justify-between mx-28 items-center p-1'>
        <div className='font-logo font-bold text-lg flex flex-col gap-0'>
          <p>TIMETABLE</p>
          <p>GENERATOR</p>
        </div>
        <div>
          <nav>
            <ul className='flex gap-10 justify-center'>
              {isAuthenticated ? (
                <>
                 <li><Link to={'/getstarted'} className={isActive('/getstarted') ? 'underline underline-offset-2' : ''}>GetStarted</Link></li>
                 <li><Link to={'/add-department'} className={isActive('/add-department') ? 'underline underline-offset-2' : ''}>Add Department</Link></li>
                 <li><Link to={'/add-course'} className={isActive('/add-course') ? 'underline underline-offset-2' : ''}>Add Course</Link></li>
                 <li><Link to={'/add-lab'} className={isActive('/add-lab') ? 'underline underline-offset-2' : ''}>Add Lab</Link></li>
                 <li><Link to={'/add-teacher'} className={isActive('/add-teacher') ? 'underline underline-offset-2' : ''}>Add Teacher</Link></li>
                 <li className='hover:cursor-pointer' onClick={handleLogout}>Logout</li> {/* Use an anchor tag for logout */}
                </>
              ) : (
                <>
                 <li><Link to={'/'} className={isActive('/') ? 'underline underline-offset-2' : ''}>Home</Link></li>
                 <li><Link to={'/login'} className={isActive('/login') ? 'underline underline-offset-2' : ''}>Login</Link></li>
                 <li><Link to={'/signup'} className={isActive('/signup') ? 'underline underline-offset-2' : ''}>Signup</Link></li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </nav>
    </div>
 );
}
