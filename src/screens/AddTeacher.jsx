import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddTeacher = () => {
    const [teacher, setTeacher] = useState("");
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [selectedLabs, setSelectedLabs] = useState([]);
    const [allCourses, setAllCourses] = useState([]);
    const [allLabs, setAllLabs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('http://localhost:8080/api/data');
                setAllCourses(response.data.availableCourses);
                setAllLabs(response.data.availableLabs);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: teacher,
            coursesByTeacher: selectedCourses.map(course => ({ course })),
            labsByTeacher: selectedLabs.map(lab => ({ lab })),
        };
        console.log(data);
        axios
        .post("http://localhost:8080/api/teachers", data)
        .then((res) => {
            if(res.status === 201){
                // Reset form data
                setTeacher("");
                setSelectedCourses([]);
                setSelectedLabs([]);
                // Navigate or perform other actions as needed
            }
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const addCourse = (course) => {
        setSelectedCourses([...selectedCourses, course]);
    };

    const removeCourse = (course) => {
        setSelectedCourses(selectedCourses.filter(c => c !== course));
    };

    const addLab = (lab) => {
        setSelectedLabs([...selectedLabs, lab]);
    };

    const removeLab = (lab) => {
        setSelectedLabs(selectedLabs.filter(l => l !== lab));
    };

    return (
        <div className='flex items-center justify-center lb:w-1/2 mx-20 pt-24 min-h-screen'>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-3 mt-8 border border-black rounded-2xl p-5 lg:p-10 shadow-2xl'>
                    <h1 className='text-center text-3xl m-1 p-5 font-bold font-logo bg-PrimaryColor'>Add Teacher</h1>
                    <div className='flex flex-col justify-center items-center gap-3 mt-8'>
                        <input
                            className='border-2 w-full px-2 rounded-md'
                            type="text"
                            placeholder="Teacher Name"
                            name="teacher"
                            value={teacher}
                            onChange={(e) => setTeacher(e.target.value)}
                        />
                    </div>
                    <div>
                        <h2>Select Courses</h2>
                        {allCourses.map((course, index) => (
                            <div key={course + index}>
                                <input
                                    type="checkbox"
                                    id={course}
                                    name={course}
                                    checked={selectedCourses.includes(course)}
                                    onChange={() => selectedCourses.includes(course) ? removeCourse(course) : addCourse(course)}
                                />
                                <label htmlFor={course}>{course}</label>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h2>Select Labs</h2>
                        {allLabs.map((lab, index) => (
                            <div key={lab + index}>
                                <input
                                    type="checkbox"
                                    id={lab}
                                    name={lab}
                                    checked={selectedLabs.includes(lab)}
                                    onChange={() => selectedLabs.includes(lab) ? removeLab(lab) : addLab(lab)}
                                />
                                <label htmlFor={lab}>{lab}</label>
                            </div>
                        ))}
                    </div>
                    <div className='flex gap-3 justify-center'>
                        <button className='text-white bg-black p-2 px-5 mt-3 rounded-2xl items-center justify-center' type='submit'>Submit</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default AddTeacher;
