import React from 'react';
import img from '../../../src/assets/images/login/login.svg';

const Login = () => {

    const handleLogin = event => {
        event.preventDefualt();
    }

    return (
        <div className="hero w-full my-8">
            <div className="hero-content grid gap-28  md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <h1 className="text-3xl font-bold text-center">Login now!</h1>

                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;