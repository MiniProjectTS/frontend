import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../authContext'; 
import { useAuthDispatch } from '../authContext';

export default function Navbar() {
 const { isAuthenticated } = useAuth(); 
 const dispatch = useAuthDispatch();
 const navigate = useNavigate();

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
                 <li><Link to={'/add-department'}>Add Department</Link></li>
                 <li><Link to={'/add-course'}>Add Course</Link></li>
                 <li><Link to={'/add-lab'}>Add Lab</Link></li>
                 <li><Link to={'/add-teacher'}>Add Teacher</Link></li>
                 <li className=' hover: cursor-pointer ' onClick={handleLogout}>Logout</li> {/* Use an anchor tag for logout */}
                </>
              ) : (
                <>
                 <li><Link to={'/'}> Home </Link></li>
                 <li><Link to={'/login'}> Login </Link></li>
                 <li><Link to={'/signup'}> Signup </Link></li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </nav>
    </div>
 );
}
