import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../firebase.init';

const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user)
            })
            .catch(error => {
                console.log(error.massage);
            })

    }
    return {
        user,
        handleGoogleSignIn
    }
};

export default useFirebase;