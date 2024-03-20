import React from 'react';
import { getImageUrl } from '../utils';
import Featurecard from '../components/Featurecard';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <>

            <div className='mx-20 lg:mx-28 pt-24 min-h-screen'> {/* Ensure the container is at least the height of the viewport */}
                {/* HERO Section */}
                <div className='flex font-PrimaryFont font-bold text-5xl items-center justify-center'>
                    College Timetable
                </div>
                <div className='flex flex-col-reverse items-center justify-between custom-medium:flex-row'>
                    <div className='bg-PrimaryColor p-7 rounded-2xl w-full md:w-2/5'>
                        <p className='flex flex-wrap'>Welcome to TTGS!, a timetable management system for colleges and universities to schedule
                            their organisation's timetable.</p>
                        <p className='flex flex-wrap'>If your organisation faces any challenges while generating or manipulating your timetable or have any concerns regarding the system please contact us.</p>
                        <button className=' mt-2 p-2 px-8 bg-MyYello rounded-full'>Contact Us</button>
                    </div>
                    <div className='items-center w-full md:w-2/5'>
                        <img className=' h-auto w-full object-cover md:w-Photo' src={getImageUrl('Hero/hero.png')} alt="Hero Image me" loading="lazy" />
                    </div>
                </div>

                {/* FEATURS Section */}
                <div className='mx-20 lg:mx-28 mt-28 lg:mt-0'>
                    <div className='flex font-PrimaryFont font-bold text-5xl items-center justify-center border-b-2 border-black'>
                        Build with ease.
                    </div>
                    <div className='flex justify-center items-center text-center mt-2 font-PrimaryFont'>
                        A Timetable Generation Tool that allows the swift, efficient and smooth
                        generation of college and university <br /> timetables with complete collision avoidance.
                    </div>
                    <div className='grid md:grid-cols-3 gap-20 mt-5'>
                        <div className=' '>
                            <Featurecard
                                imageUrl={getImageUrl('Features/fast.png')}
                                alt={"Our website is fast"}
                                title={"Fast"}
                                description={"Fast and Smooth Scheduling."}
                                className="bg-MyGreen"
                            />
                        </div>

                        <div className=''>
                            <Featurecard
                                imageUrl={getImageUrl('Features/secure.png')}
                                alt={"Our website is Secure"}
                                title={"Secure"}
                                description={"Secure Scheduling Algorithem."}
                                className="bg-MyYello"
                            />
                        </div>

                        <div className=''>
                            <Featurecard
                                imageUrl={getImageUrl('Features/relaiable.png')}
                                alt={"Our website is Reliable"}
                                title={"Reliable"}
                                description={"Reliable and Trustworthy."}
                                className="bg-MyRed"
                            />
                        </div>
                    </div>
                </div>


                {/* CONNECT Section */}
                <div className='flex flex-col items-center justify-center my-10'>
                    <p className='font-PrimaryFont font-semibold text-2xl'>Connect</p>
                    <div className=' grid grid-cols-12 h-16 w-16 gap-10 items-center justify-center my-5'>
                        <a className='col-span-3'  href='https://www.instagram.com/' target='_blank'><img src={getImageUrl("Connect/instagram.png")}  alt="Instagram" /></a>
                        <a className='col-span-3'   href='https://www.facebook.com/' target='_blank'><img src={getImageUrl("Connect/facebook.png")} alt="Facebook" /></a>
                        <a className='col-span-3'   href='https://www.youtube.com/' target='_blank'><img src={getImageUrl("Connect/youtube.png")} alt="YouTube" /></a>
                        <a className='col-span-3'   href='https://twitter.com/?lang=en' target='_blank'><img src={getImageUrl("Connect/x.png")} alt="X Platform" /></a>
                    </div>
                    <p>To create a schedule, you need to <Link className='underline underline-offset-2 ' to={'/signup'}>sign in.</Link></p>
                </div>
            </div>
        </>
    );
}
