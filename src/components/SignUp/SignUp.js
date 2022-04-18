import React from 'react';
import { Link } from 'react-router-dom';


const SignUp = () => {

    const handelEmail = event => {
        console.log(event.target.value);


    }
    const handlePassword = event => {
        console.log(event.target.value);

    }
    const formSubmit = event => {
        event.preventDefault()


    }
    return (
        <form onSubmit={formSubmit}>
            <div className='min-h-screen bg-gray-100 text-gray-800 antialiased py-1 flex flex-col justify-center sm:py-12'>
                <div className='ralative py-3 sm:w-96 mx-auto '>
                    <span className='text-2xl  font-light mx-8'>Sign up</span>
                    <div className='mt-4 bg-white shadow-md rounded-lg text-left'>
                        <div className='h-2 bg-indigo-400 rounded-t-md'>
                        </div>
                        <div className='px-8 py-6'>
                            <label className='block font-semibold'>Username</label>
                            <input type="text" placeholder='Name' className='border w-full h-5 px-3 py-3 mt-2 mb-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' />
                            <label className='block font-semibold'>Email</label>
                            <input onBlur={handelEmail} type="text" placeholder='Email' className='border w-full h-5 px-3 py-3 mt-2 mb-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' />
                            <label className='block font-semibold'>Password</label>
                            <input onBlur={handlePassword} type="password" placeholder='Password' className='border w-full h-5 px-3 py-3 mt-2 mb-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' />
                            <div className='flex justify-between items-baseline'>
                                <button className='mt-4 bg-indigo-500 text-white  py-1 px-6 rounded-md hover:bg-indigo-600'>SignUp</button>
                                <Link to='/login' className='mx-3' ><small >Already have a Account?</small><small className='text-sm hover:underline px-2' >Sign In</small></Link>
                            </div>


                        </div>

                    </div>

                </div>

            </div>
        </form>
    );
};

export default SignUp;