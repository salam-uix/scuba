import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import ContactUs from '../ContactUs/ContactUs';
import GiftVoucher from '../GiftVoucher/GiftVoucher';
import Service from '../Service/Service';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <div className='bg-green-50 py-10'>
                <div className='container mx-auto'>
                    <div className='flex flex-wrap md:flex-nowrap justify-center items-center'>
                        <div className='flex-1'>
                            <h1 className='text-6xl font-bold text-left w-3/4 tracking-widest leading-tight'>FLOAT IN A WEIGHTLESS WORLD</h1>
                            <p className='text-lg text-left w-3/4 my-4'>Experience incredible emotions discovering new amazing underwater worlds with our diving school.</p>
                            <button className='bg-cyan-800 hover:bg-cyan-900 ease-in-out duration-300 font-semibold text-white py-4 px-8 mt-5 rounded-full item-left tracking-wide'>GET ENROLED</button>
                        </div>
                        <div className='flex-1'>
                            <img src="https://i.ibb.co/h2SvgKL/diver-header-isolated.png" alt="" />
                        </div>
                    </div>
                </div>
                <About />
                <GiftVoucher />
                <div className='container mx-auto text-center'>
                    <h2 className='text-4xl text-center font-bold tracking-widest'>CHECK OUR COURSES</h2>
                    <p className='text-lg text-center w-1/2 mx-auto py-8'>Experience incredible emotions discovering new amazing underwater worlds with our diving school.</p>

                    <div className='grid grid-cols-4 gap-4 py-8'>
                        {
                            services.slice(0, 4).map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                    <Link className='bg-cyan-800 hover:bg-cyan-900 ease-in-out duration-300 rounded-full px-3 py-1 text-base font-semibold text-white mr-2 mb-2 px-8 py-3' to="/services">Explore All Services</Link>
                </div>
            </div>
            <ContactUs></ContactUs>
        </>
    );
};

export default Home;