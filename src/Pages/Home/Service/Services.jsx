import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setService(data))

    }, [])
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-2xl font-bold text-orange-500'>Services</h1>

                <p className='text-4xl font-bold '>Our Service Area</p>
                <p className='font-medium font-mono'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    <br /> Nam tempore reiciendis accusamus nihil mollitia pariatur.</p>
            </div>
            <div className='grid gap-5 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
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