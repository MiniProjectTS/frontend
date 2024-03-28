import React from 'react'
import Stepscard from '../components/Stepscard'

const GetStarted = () => {
    return (
        <div className='mx-20 lg:mx-28 pt-24 min-h-screen my-10'>
            <div className='flex font-PrimaryFont font-bold text-5xl items-center justify-center'>
                TTGS | Generate Timetable
            </div>
            <div className='flex flex-wrap text-xl font-light mt-10 border-2 border-dashed border-black p-5 rounded-lg  '>
                Please make sure you have entered the correct information for the Teachers,
                Courses, Laboratories and Departments into the system. If you 
                have not entered all the information yet please refer below on how to go about 
                feeding all the information into the system. Once confirmed please click on the 
                "Generate Timetable" button below and wait patiently as TTGS generates your 
                timetable for you.
            </div>
            <div className='flex font-PrimaryFont font-bold text-5xl items-center justify-center mt-14'>
                Steps
            </div>
            <div className='flex flex-col gap-5 mt-10'>
                <div className=' grid grid-cols-12 gap-5'>
                    <div className=' col-span-6'>
                        <Stepscard 
                            className="bg-MyRed border-red-600"
                            title="1. Add Departments"
                            text={`Navigate to the "Add Departments" section and add the corresponding details.`}
                        />
                    </div>
                    <div className=' col-span-6'>
                    <Stepscard 
                            className="bg-MyRed border-red-600"
                            title="2. Add Courses"
                            text={`Navigate to the "Add Courses" section and add the corresponding details of the course.`}
                        />
                    </div>
                </div>
                <div className=' grid grid-cols-12 gap-3'>
                    <div className=' col-span-6'>
                        <Stepscard 
                            className="bg-MyYello border-yellow-600"
                            title="3. Add Laboratory"
                            text={`Navigate to the "Add Laboratory" section and add the corresponding details of the Labs.`}
                        />
                    </div>
                    <div className=' col-span-6'>
                    <Stepscard 
                            className="bg-MyYello border-yellow-600"
                            title="4. Add Teacher"
                            text={`Navigate to the "Add Teacher" section and add the corresponding details of the Teacher.`}
                        />
                    </div>
                </div>
                <div className=' grid grid-cols-12 gap-3'>
                    <div className=' col-span-3'>
                    </div>
                    <div className=' col-span-6'>
                    <Stepscard 
                            className="bg-MyGreen border-green-600"
                            title="5. Generate Timetable"
                            text={`Navigate to the "Add Teacher" section and add the corresponding details of the Teacher.`}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetStarted