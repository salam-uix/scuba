import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className=''>
            <div className='mb-20'>
                <img className='w-full' src="https://i.ibb.co/Btd1HVD/bg4.jpg" alt="" />
            </div>
            <div className='container mx-auto my-10'>

                <div className='grid grid-cols-3 gap-y-8'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;