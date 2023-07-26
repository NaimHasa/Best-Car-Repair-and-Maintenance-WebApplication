import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ services }) => {
    const { _id, img, title, price } = services;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-8">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <div className="card-actions justify-between align-middle">
                    <p className='text-2xl text-orange-600 font-bold'>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-outline btn-info">Book Now</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;