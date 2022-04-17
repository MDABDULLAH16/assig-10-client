import React from 'react';

const Cart = ({ user }) => {
    const { name, price, img, ratings } = user;
    return (
        <div className='bg-gray-200 ' >
            <div className=' border-solid border-2 border-indigo-200 rounded-lg shadow-xl  m-10  bg-white p-2'>
                <div className='bg-white text-center'>
                    <img src={img} alt="" />
                    <h1>Name: {name} </h1>
                    <h2>Price:$ {price}</h2>
                    <p> Rating: {ratings}</p>
                    <div>
                        <button className='border w-full bg-indigo-600 text-white rounded-md hover:bg-indigo-800 mt-3 font-semibold'>Booking</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;