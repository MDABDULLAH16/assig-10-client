import React from 'react';

const SignInButton = () => {

    const handleGoogleSignIn = () => {
        console.log('hurray this is working buttpn');
    }
    const handleGitHubSignIn = () => {
        console.log('hurray this is working buttp2n');
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