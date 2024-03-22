import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';



export default function Login() {
  // This state store all data of form 
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: ""
  });

  // this state used to manage status of conparesion of password and conform password 
  const [errorMessage, setErrorMessage] = useState("");


  // this function change data of using setData 
  const handleChange = (e) => {
    setData(prevData => ({ ...prevData, [e.target.name]: e.target.value }));
  }


  // handle Submit this function send data at Back end  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password !== data.confPassword) {
      setErrorMessage("Passwords do not match.");
      return; // Prevent form submission
    }

    setErrorMessage(""); // Clear error message if passwords match
     try {
      const response = await axios.post('/api/signup', data);
     } catch (error) {
      setErrorMessage("Somthing went wrong try again") 
     }
  }

  return (
    <div className='flex items-center justify-center lb:w-1/2 mx-20 pt-24 min-h-screen '>
      <form onSubmit={handleSubmit} className='border border-black rounded-2xl p-5 lg:p-10 shadow-2xl'>
        <h1 className='text-center text-3xl m-1 p-5 font-bold font-logo bg-PrimaryColor'>Sign up</h1>
        <div className='flex flex-col gap-3 mt-8'>
          <div className='mt-1'>
            <label htmlFor='name' className='text-lg font-medium'>Name: </label>
            <input required className='border-2 w-full px-2 rounded-md' type='text' name='name'
              id='name' placeholder="Name" value={data.name} onChange={handleChange} />

          </div>
          <div className='mt-1'>
            <label htmlFor='email' className='text-lg'>Email :</label>
            <input required className='border-2 w-full px-2 rounded-md' type='email' name='email'
              id='email' placeholder="Email" value={data.email} onChange={handleChange} />

          </div>
          <div className='mt-1'>
            <label htmlFor='password' className='text-lg font-medium'>Creat Password: </label>
            <input required className='border-2 w-full px-2 rounded-md' type='password' name='password'
              id='password' placeholder="Password" value={data.password} onChange={handleChange} />

          </div>
          <div className='mt-1'>
            <label htmlFor='confPassword' className='text-lg font-medium'>Confirm Password:</label>
            <input required className='border-2 w-full px-2 rounded-md' type='text' name='confPassword'
              id='confPassword' placeholder="Password" value={data.confPassword} onChange={handleChange} />

          </div>

          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          <div className='flex gap-3 justify-center'>
            <button className='text-white bg-black p-2 px-10 mt-3 rounded-2xl' type='submit'>Submit</button>
          </div>
          <p className='m-3'>Login in existing account: <Link to="/login" className='underline underline-offset-2 '>Login</Link></p>
        </div>
      </form>
    </div>
  )
}
