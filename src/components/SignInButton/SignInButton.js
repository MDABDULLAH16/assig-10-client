import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import auth from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase';

const SignInButton = () => {
    const { handleGoogleSignIn } = useFirebase();


    const githubProvider = new GithubAuthProvider();


    const handleGitHubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error.massage);
            })

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