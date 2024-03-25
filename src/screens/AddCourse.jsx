import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = () => {
    const [checkedItems, setCheckedItems] = useState({
        courseName : '',
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleCheckboxChange = (event) => {
        setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(checkedItems);
            const response = await axios.post('https://your-api-endpoint.com/submit', checkedItems);
            console.log(response.data);
        } catch (error) {
            setErrorMessage('Something went wrong');
      
        }
    };

    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    return (
        <div className='flex items-center justify-center lb:w-1/2 mx-20 pt-24 min-h-screen '>
            <form onSubmit={handleSubmit} className='border border-black rounded-2xl p-5 lg:p-10 shadow-2xl'>
                <h1 className='text-center text-3xl m-1 p-5 font-bold font-logo bg-PrimaryColor'>Add Course</h1>
                <div className='flex flex-col justify-center items-center gap-3 mt-8'>
                    {items.map((item, index) => (
                        <div className='mt-1' key={index}>
                            <input
                                className='border-2 px-2 rounded-md'
                                type="checkbox"
                                name={item}
                                checked={checkedItems || false}
                                onChange={handleCheckboxChange}
                            />
                            <label>{item}</label>
                        </div>
                    ))}
                    {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                    <div className='flex gap-3 justify-center'>
                        <button className='text-white bg-black p-2 px-10 mt-3 rounded-2xl' type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCourse;
