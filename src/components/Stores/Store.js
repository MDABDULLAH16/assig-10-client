import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';


const Store = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <div className='bg-gray-200 pt-4 py-0'>
                <span className='text-2xl font-bold'>Our Servises</span>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 text-gray-800 font-semibold bg-white">
                {
                    users.map(user => <Cart
                        kay={user.id}
                        user={user}

                    ></Cart>)
                }
            </div>
        </div>
    );
};
export default Store;