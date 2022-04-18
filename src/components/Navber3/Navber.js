import { signOut } from 'firebase/auth';
import React, { } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import CustomLink from '../CustomLink/CustomLink';

const Navber = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <nav className=' bg-indigo-700  font-semibold text-white   '>

            <div className='p-3 flex items-center justify-center  '>
                <CustomLink className=' m-4' to='/' >Home</CustomLink>
                <CustomLink className=' m-4' to='/cheekout' >CheekOut</CustomLink>
                <CustomLink className='m-4' to='/blog'>Blog</CustomLink>
                <CustomLink className=' m-4' to='/about' >About</CustomLink>


                {
                    user ? <button onClick={handleSignOut} >SignOut</button> :
                        <CustomLink className=' m-4' to='/login' >Login</CustomLink>}


            </div>


        </nav>
    );
};

export default Navber;