import React, { useContext } from 'react';
import img from '../../../src/assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import SocialLogin from '../Shered/SocialLogin/SocialLogin';

const Signup = () => {
    const { createUser } = useContext(AuthContext);

    const handleSingup = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => {
                console.error(err)
            });


    }
    return (
        <div className="hero w-full my-8">
            <div className="hero-content grid gap-28  md:grid-cols-2 flex-col lg:flex-row ">
                <div className="text-center lg:text-left">

                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">

                    <h1 className="text-3xl font-bold text-center">Please Sign Up</h1>

                    <form onSubmit={handleSingup} className="card-body">
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Current Password</span>
                            </label>
                            <input type="password" name='password' placeholder="current password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-primary" />
                        </div>
                    </form>
                    <p className='text-center'>Already You have to Account? Please <Link className='text-orange-600 font-bold' to='/login'>LogIn</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div >
    );
};

export default Signup;