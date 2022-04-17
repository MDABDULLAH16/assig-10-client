import React from 'react';

const Cart = ({ user }) => {
    const { name, price, img, rating } = user;
    return (
        <div>
            <img src={img} alt="" />
            <h1>Name: {name} </h1>
            <h2>Price: {price}</h2>
            <p> Rating: {rating}</p>
        </div>
    );
};

export default Cart;