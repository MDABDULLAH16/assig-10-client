import React from 'react';

import CustomLink from '../CustomLink/CustomLink';

const Navber = () => {
    return (
        <nav className=' bg-indigo-700  font-semibold text-white   '>

            <div className='p-3 flex items-center justify-center  '>
                <CustomLink className=' m-4' to='/' >Home</CustomLink>
                <CustomLink className=' m-4' to='/cheekout' >Cheek Out</CustomLink>
                <CustomLink className=' m-4' to='/about' >About</CustomLink>
                <CustomLink className=' m-4' to='/login' >Login</CustomLink>

            </div>


        </nav>
    );
};

export default Navber;