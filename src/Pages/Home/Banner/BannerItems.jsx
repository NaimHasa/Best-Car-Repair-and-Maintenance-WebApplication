import React from 'react';
import './Banner.css';

const BannerItems = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative  w-full h-[600px]">
            <div className='carousel-img '>
                <img src={image} className="w-full" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-24 right-5 top-1/4 ">
                <h1 className='font-bold text-5xl text-white'>Affordable
                    <br />
                    price for car
                    <br />
                    Servicing
                </h1>


            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-1/2 w-2/5 ">
                <p className='text-white'>
                    There are many variations of passages of avaliable, but the majority have suffered alteration in some form
                </p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-3/4 w-2/5">
                <button className="btn btn-outline btn-secondary mr-4">PASSENGER CAR</button>
                <button className="btn btn-outline btn-secondary">PACKAGE OFFERS</button>
            </div>


            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-2 bg-orange-400">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle bg-orange-400">❯</a>
            </div>
        </div>
    );
};

export default BannerItems;