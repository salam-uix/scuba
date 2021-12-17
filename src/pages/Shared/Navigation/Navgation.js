import React from 'react';
import { NavLink } from 'react-router-dom';

const Navgation = () => {
    return (
        // < This example requires Tailwind CSS v2.0 + 
        <nav className="bg-green-50 py-4">
            <div className="container mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <img className="hidden lg:block h-1/2 w-3/4 object-cover" src="https://i.ibb.co/tDwc5t4/scuba.png" alt="Workflow" />
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-8">
                            <NavLink className={'text-xl text-gray-800 hover:text-gray-900 font-medium'} to="home">Home</NavLink>
                            <NavLink className={'text-xl text-gray-800 hover:text-gray-900 font-medium'} to="services">Services</NavLink>
                            <NavLink className={'text-xl text-gray-800 hover:text-gray-900 font-medium'} to="about">About us</NavLink>
                            <NavLink className={'text-xl text-gray-800 hover:text-gray-900 font-medium'} to="contact" >Contact us</NavLink>

                            {/* <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a> */}
                        </div>
                    </div>


                </div>
            </div>
        </nav>

    );
};

export default Navgation;