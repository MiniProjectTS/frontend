import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeNavbar() {
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
              <li><Link to={'/'}> Home </Link></li>
              <li><Link to={'/login'}> Login </Link></li>
              <li><Link to={'/signup'}> Signup </Link></li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  )
}
