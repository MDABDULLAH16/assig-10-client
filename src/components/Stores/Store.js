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

            {
                users.map(user => <Cart
                    kay={user.id}
                    user={user}

                ></Cart>)
            }
        </div>
    );
};
export default Store;