import React, { useEffect, useState } from 'react';
import About from '../About/About';
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
            <div className='bg-green-50'>
                <div className='container mx-auto'>
                    <div className='flex flex-wrap md:flex-nowrap justify-center items-center'>
                        <div className='flex-1'>
                            <h1 className='text-6xl font-bold text-left w-3/4 tracking-widest leading-tight'>FLOAT IN A WEIGHTLESS WORLD</h1>
                            <p className='text-lg text-left w-3/4 my-4'>Experience incredible emotions discovering new amazing underwater worlds with our diving school.</p>
                            <button className='bg-gray-700 hover:bg-gray-800 font-semibold text-white py-4 px-8 mt-5 rounded-full item-left ease-in-out duration-300 tracking-wide'>GET ENROLED</button>
                        </div>
                        <div className='flex-1'>
                            <img src="https://i.ibb.co/h2SvgKL/diver-header-isolated.png" alt="" />
                        </div>
                    </div>
                </div>
                <About />
                <div className='container mx-auto'>

                    <div className='grid grid-cols-4 gap-4'>
                        {
                            services.slice(0, 4).map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;