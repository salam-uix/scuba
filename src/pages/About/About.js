import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className='bg-green-50 py-36'>
                <div className='container mx-auto'>
                    <div className='flex flex-wrap md:flex-nowrap justify-center items-center space-x-36'>
                        <div className='flex-1'>
                            <img src="https://i.ibb.co/bWvykcs/diving-about-scuba.png" alt="" />
                        </div>
                        <div className='flex-1'>
                            <h1 className='text-5xl font-bold text-left tracking-widest leading-tight'>ABOUT OUR <br /> DIVING CLUB</h1>
                            <p className='text-lg text-left w-3/4 my-4'>Do you dream of diving? Do you want to dive into the fantastic underwater world of the ocean? Our experienced instructors will not only help you explore the underwater world, but also teach you how to interact with it. All you have to do is contact us and we promise to provide you with everything you need to dive.

                                We guarantee your safety underwater so you can relax and enjoy the underwater world. Time to make your dream come true!</p>
                            <NavLink to="/about" className='text-xl font-semibold text-gray-800 mt-5 item-left ease-in-out duration-300 tracking-wide flex uppercase'>
                                READ MORE
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </NavLink>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;