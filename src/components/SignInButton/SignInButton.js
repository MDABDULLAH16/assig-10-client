
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

import useFirebase from '../../hooks/useFirebase';

const SignInButton = () => {
    const Navigate = useNavigate()

    const { handleGoogleSignIn, user } = useFirebase();
    const { handleGitHubSignIn, user1 } = useFirebase();
    if (user || user1) {
        Navigate('/cheekout')
    }




    return (
        <div>
            <button onClick={handleGoogleSignIn} className='border w-full bg-indigo-600 text-white rounded-md hover:bg-indigo-800 mt-3 font-semibold'>Sign in with Google</button>
            <br />
            <button onClick={handleGitHubSignIn} className='border w-full bg-indigo-600 text-white rounded-md hover:bg-indigo-800 mt-2 font-semibold'>Sign in with Github</button>

        </div>
    );
};

export default SignInButton;