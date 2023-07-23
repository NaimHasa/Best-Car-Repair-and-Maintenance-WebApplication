import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data))

    }, [])
    return (
        <div className='mt-40 bg-gray-100'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold text-orange-500'>Services</h1>

                <p className='text-4xl font-bold '>Our Service Area</p>
                <p className='font-medium font-mono my-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    <br /> Nam tempore reiciendis accusamus nihil mollitia pariatur.</p>
            </div>
            <div className='grid gap-5 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3'>
                {
                    service.map(services =>
                        <ServiceCard key={services._id} services={services}>
                        </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;