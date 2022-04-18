import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
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
    return {
        user,
        handleGoogleSignIn,
        handleGitHubSignIn
    }
};

export default useFirebase;