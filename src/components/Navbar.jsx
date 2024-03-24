import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../authContext'; // Import useAuth from AuthContext
import { useAuthDispatch } from '../authContext';


export default function Navbar() {
 const { isAuthenticated } = useAuth(); // Use the useAuth hook to access the authentication state
 const dispatch = useAuthDispatch();

 const handelLogout = (e) => {
    dispatch({type : 'LOGOUT'});
  
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('username');

 }

 return (
    <div className='fixed top-0 left-0 right-0 bg-PrimaryColor drop-shadow-xl z-50'>
      <nav className='flex justify-between mx-28 items-center p-1'>
        <div className='font-logo font-bold text-lg flex flex-col gap-0'>
          <p><Link to={'/'}>TIMETABLE</Link></p>
          <p><Link to={'/'}>GENERATOR</Link></p>
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
                 <li><Link to={'/add-labtecher'}>Add Lab Teacher</Link></li>
                 <li><Link to={'/add-room'}>Add Room</Link></li>
                 <li><Link to={'/add-time'}>Add Time</Link></li>

                 <li onClick={handelLogout}>Logout</li>
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
