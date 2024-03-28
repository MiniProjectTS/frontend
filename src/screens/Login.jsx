import React, { useState } from 'react';
import axios from 'axios';
import { useAuthDispatch } from '../authContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/auth/login', data);

      if (response.data && response.data.jwtToken && response.data.username) { 
        const {jwtToken,username} = response.data;
        dispatch({ type: 'LOGIN', payload: {jwtToken,username} });
        
        localStorage.setItem('jwt_token',jwtToken);
        localStorage.setItem('username',username);
        
        navigate('/getstarted');
        
      } else {
        setErrorMessage('Invalid Credential');
      }
    } catch (error) {
      console.log(error);
      setErrorMessage('Something went wrong');
    }
  };

  const handleChange = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };
  return (
    <div className='flex items-center justify-center lb:w-1/2 mx-20 pt-24 min-h-screen '>
      <form onSubmit={handleSubmit} className='border border-black rounded-2xl p-5 lg:p-10 shadow-2xl'>
        <h1 className='text-center text-3xl m-1 p-5 font-bold font-logo bg-PrimaryColor'>Login</h1>
        <div className='flex flex-col gap-3 mt-8'>
          <div className='mt-1'>
            <label className='text-lg'>Email :
              <input required className='border-2 w-full px-2 rounded-md' type='email'
                name='email' placeholder="Email" value={data.email} onChange={handleChange} />
            </label>
          </div>
          <div className='mt-1'>
            <label className='text-lg font-medium'>Password:
              <input required className='border-2 w-full px-2 rounded-md' type='password'
                name='password' placeholder="Password" value={data.password} onChange={handleChange} />
            </label>
          </div>

          {errorMessage && <div className="text-red-500">{errorMessage}</div>}

          <div className='flex gap-3 justify-center'>
            <button className='text-white bg-black p-2 px-10 mt-3 rounded-2xl' type='submit'>Submit</button>
          </div>
          <p className='m-3'>Create a new Account : <Link to="/signup" className='underline underline-offset-2 '>Sign-up</Link></p>
        </div>
      </form>
    </div>
  )
}
