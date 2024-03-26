import React, { useState } from "react";
import axios from "axios";

const AddCourses = () => {
    const [departments, setDepartments] = useState(["IT", "CS", "EE"]);
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [course, setCourse] = useState("");
    const [formData, setFormData] = useState([]); // Initialize as an empty array

    const handleAddCourse = () => {
        if (selectedDepartment && course) {
            const newFormData = {
                name: course
            };
            setFormData([...formData, newFormData]);
            setCourse(""); 
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        // Wrap formData in an object with a 'name' key before sending
        const dataToSend = {
            name: formData
        };
        console.log(dataToSend);
        axios
            .post("https://your-api-endpoint.com/courses", dataToSend)
            .then((res) => {
                console.log(res.data);
                // Optionally, clear formData after successful submission
                setFormData([]);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleRemove = (index) => {
        setFormData(formData.filter((item, i) => i !== index));
    };

    return (
        <div className='flex flex-col items-center justify-center lb:w-1/2 mx-20 pt-24 min-h-screen gap-10 '>
            <form onSubmit={handleSubmit} className='border border-black rounded-2xl p-5 lg:p-10 shadow-2xl'>
                <h1 className='text-center text-3xl m-1 p-5 font-bold font-logo bg-PrimaryColor'>Add Course</h1>
                <div className='flex flex-col justify-center items-center gap-3 mt-8'>
                    <select
                        className='border-2 w-full px-2 rounded-md'
                        value={selectedDepartment}
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                    >
                        <option value="">Select Department</option>
                        {departments.map((dep, i) => (
                            <option key={i} value={dep}>
                                {dep}
                            </option>
                        ))}
                    </select>

                    <input
                        className='border-2 w-full px-2 rounded-md'
                        type="text"
                        placeholder="Course"
                        name="course"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    />
                </div>
                <div className='flex gap-3 justify-center'>
                    <button className='text-white bg-black p-2 px-10 mt-3 rounded-2xl' onClick={handleAddCourse}>Add Course</button>
                    <button className='text-white bg-black p-2 px-10 mt-3 rounded-2xl' type='submit'>Submit</button>
                </div>
            </form>
            <div>
                {formData.length > 0 && <ul>
                    {formData.map((course, i) => (
                        <li className='flex justify-center items-center gap-5 border border-black p-3 rounded-lg ' key={i}>
                            <div>
                                {course.course}
                            </div>
                            <button className='text-white bg-black p-2 px-5 mt-3 rounded-2xl items-center justify-center' onClick={() => handleRemove(i)}>X</button>
                        </li>
                    ))}
                </ul>
                }
            </div>
        </div>
    );
};

export default AddCourses;
