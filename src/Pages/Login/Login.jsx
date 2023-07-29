import React, { useContext } from 'react';
import img from '../../../src/assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import SocialLogin from '../Shered/SocialLogin/SocialLogin';

const Login = () => {
    const { handleSingIn } = useContext(AuthContext);

    const handleLogIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        handleSingIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);


                // console.log(loggedUser)
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

                    <h1 className="text-3xl font-bold text-center">Login now!</h1>

                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className="btn btn-primary" />
                        </div>
                    </form>
                    <p className='text-center'>New to Genius Car Please <Link to='/signup' className='text-orange-600 font-bold'>SignUp</Link></p>
                    <SocialLogin className='text-center'></SocialLogin>
                </div>

            </div>
        </div >
    );
};

export default Login;