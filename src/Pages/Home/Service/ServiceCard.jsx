import React from 'react';

const ServiceCard = ({ services }) => {
    const { img, title, price } = services;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-8">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <div className="card-actions justify-between align-middle">
                    <p className='text-2xl text-orange-600 font-bold'>Price: ${price}</p>
                    <button className="btn btn-outline btn-info">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;