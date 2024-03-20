import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className=''>
      <footer className="bottom-0 left-0 right-0 bg-PrimaryColor p-4">
        <div className="flex flex-wrap gap-32 container my-4 mx-auto lg:mx-28">

          <div className="flex flex-col items-center w-full lg:w-auto">
            <div className='font-logo font-bold text-4xl mb-1'>
              <p><Link to={'/'}>TIMETABLE</Link></p>
              <p><Link to={'/'}>GENERATOR</Link></p>
            </div>
            <p>&copy;2024 College Timetable. All rights reserved.</p>
          </div>

          <div className='flex flex-col gap-2 w-full lg:w-auto'>
            <p className='font-PrimaryFont text-2xl border-t border-b border-black pt-1 text-center'>Our Address</p>
            <p>+91  9999999999</p>
            <p>timetable123@gmail.com</p>
            <div>
              <p>A. D. Patel Institute of Technology,</p>
              <p>New Vallabh Vidhyanagar</p>
            </div>
          </div>

          <div className='flex flex-col gap-2 w-full lg:w-auto'>
            <p className='font-PrimaryFont text-2xl border-t border-b border-black pt-1 text-center'>Our Timing</p>
            <p>Monday - Saturday
               <br/>9pm -  5pm </p>
            <p>Sunday : Closed</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
