import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Dashboard from '../Dashboard/Dashboard';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    

    useEffect( ()=>{
        fetch('https://glacial-spire-55948.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            <Dashboard></Dashboard>
            <div className="row row-cols-1 row-cols-md-5 g-4">
            {
                orders.map(order => <Order
                key={order._id}
                order ={order}
                setOrders={setOrders}
                orders={orders}
                ></Order>)
            }
            </div>
        </div>
    );
};

export default ManageOrders;