import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddDepartment = () => {
  const [selectedOption, setSelectedOption] = useState({
    name: ''
  });

  const options = [
    { value: "IT", label: "Infromation Technology" },
    { value: "CP", label: "Computer Porograming" },
    { value: "AI/DS", label: "Artificial Inteligence & Data Science" },
    { value: "CSD", label: "Computer Science Design" },
    { value: "FPT", label: "Food Processing Technology" },
    { value: "EE", label: "Electrical Engineering" },
    { value: "EC", label: "Electrical & Communication Engineering" },
    { value: "ME", label: "Mechanical Engineering " },
  ];

  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const jwtToken = localStorage.getItem('jwt_token');

      const response = await axios.post('http://localhost:8080/api/departments', selectedOption,{
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      if (response.status == 201) {
        navigate('/add-course')
      }
    } catch (error) {
      console.log(error);
      setErrorMessage('Something went wrong');
    }
  };

  const handleChange = (event) => {
    setSelectedOption(prevState => ({
      ...prevState,
      name: event.target.value
    }));
  };

  return (
    <div className='flex items-center justify-center lb:w-1/2 mx-20 pt-24 min-h-screen'>
      <form onSubmit={handleSubmit} className='border border-black rounded-2xl p-5 lg:p-10 shadow-2xl'>
        <h1 className='text-center text-3xl m-1 p-5 font-bold font-logo bg-PrimaryColor'>Add Department</h1>
        <div className='flex flex-col gap-3 mt-8'>
          <div className='mt-1'>
            <label className='text-lg'>Department :
              <select className='border-2 w-full px-2 rounded-md' value={selectedOption.name} onChange={handleChange}>
              <option value="">Select Department</option>
                {options.map((option) => (
                  <option key={option.value} value={option.value} name='deptName'>
                    {option.label}
                  </option>
                ))}
              </select>

            </label>
          </div>
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}

          <div className='flex gap-3 justify-center'>
            <button className='text-white bg-black p-2 px-10 mt-3 rounded-2xl' type='submit'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddDepartment;
