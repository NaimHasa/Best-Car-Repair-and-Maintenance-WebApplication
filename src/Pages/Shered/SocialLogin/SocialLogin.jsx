import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const { GoogleLogin } = useContext(AuthContext);

    const googleHandleSignIn = () => {
        GoogleLogin()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => console.error(error))

    }

    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center'>
                <button onClick={googleHandleSignIn} className="btn btn-circle btn-outline font-extrabold ">
                    G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;