import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} alt='' className="max-w-sm rounded-lg shadow-2xl w-4/5 h-full" />
                    <img src={parts} alt='' className="max-w-sm shadow-2xl absolute w-4/6 top-1/2 right-6 rounded-lg border-8" />
                </div>
                <div className='w-1/2'>
                    <p className='text-2xl text-orange-400 font-bold '>ABOUT US</p>
                    <h1 className="text-5xl font-bold my-4">We are qualified & of experience in this field</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;