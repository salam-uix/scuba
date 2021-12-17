import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-cyan-900'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-5 gap-4 py-8'>
                    <div>
                        <img src="https://i.ibb.co/tDwc5t4/scuba.png" alt="" />
                        <p className='text-white'>Reinventing the way of creating websites, we aim to create the most master-peaced WordPress theme available on the market.</p>
                    </div>
                    <div>
                        <h3 className='uppercase text-white py-4 font-bold'>INSIDE SCUBA</h3>
                        <div className='flex flex-col space-y-1'>
                            <Link className='text-white' to="/">Who we are</Link>
                            <Link className='text-white' to="/">The scuba difference</Link>
                            <Link className='text-white' to="/">The Our History</Link>
                            <Link className='text-white' to="/">Corporate Responsibility</Link>
                            <Link className='text-white' to="/">Work at scuba</Link>
                        </div>

                    </div>
                    <div>
                        <h3 className='uppercase text-white py-4 font-bold'>Corporate information</h3>
                        <div className='flex flex-col space-y-1'>
                            <Link className='text-white' to="/">Conpany statictis</Link>
                            <Link className='text-white' to="/">Press</Link>
                            <Link className='text-white' to="/">Our partners</Link>
                            <Link className='text-white' to="/">Advertise with us</Link>
                            <Link className='text-white' to="/">Scuba aware</Link>
                            <Link className='text-white' to="/">Aware foundation</Link>
                        </div>
                    </div>
                    <div>
                        <h3 className='uppercase text-white py-4 font-bold'>Scuba DIVE CENTERS & RESORTS</h3>
                        <div className='flex flex-col space-y-1'>
                            <Link className='text-white' to="/">Why Partner with PADI?</Link>
                            <Link className='text-white' to="/">Dive Center & Resort Levels</Link>
                            <Link className='text-white' to="/">Starting Your Own Scuba Business</Link>
                            <Link className='text-white' to="/">Business Planning Help</Link>
                            <Link className='text-white' to="/">How Long Does It Take?</Link>
                            <Link className='text-white' to="/">Become a Retailer or Resort</Link>
                            <Link className='text-white' to="/">Regional Support</Link>
                        </div>
                    </div>
                    <div>
                        <h3 className='uppercase text-white py-4 font-bold'>EMAIL UPDATES</h3>
                        <p className='text-white'>Get 10% off eLearning online! Sign up and get the latest updates, offers and more.</p>
                        <div className='flex items-center bg-white rounded-full relative px-8 overflow-hidden h-12 mt-6'>
                            <input className='outline-none h-full' type="text" />
                            <div className='bg-green-500 h-full absolute right-0 p-4'>
                                <button className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-8 strock-current text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-white text-center'>© Copyright 2021 || SCUBA</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;