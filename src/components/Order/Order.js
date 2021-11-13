import React, { useEffect, useState } from 'react';

const Order = ({order, orders,setOrders}) => {
    const {_id, status, phone,email, address} = order;
    const [statusData, setStatusData] = useState({})
    const cancelOrder = id =>{
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://glacial-spire-55948.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrder = orders.filter(order => order._id !== id);
                        setOrders(remainingOrder);
                    }
                });
        }

    }
    useEffect( ()=>{
        const updateStatus = {status: "shipped"}
        setStatusData(updateStatus)
    },[])

    const orderShipped = (id) =>{
        
        const url = `https://glacial-spire-55948.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(statusData)
        })
            .then(res => res.json())
            .then(data => {
                      console.log(data)
                    alert('Update Successful');
                    setStatusData({});
            })
    }
    return (
        <div>
            <div className="col">
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">Order_Id: <span className="fs-6 text-success">{_id}</span></h5>
        <h5 className="card-title">Email: <span className="fs-6">{email}</span></h5>
        <h5 className="card-title">Phone: <span className="fs-6">{phone}</span></h5>
        <h5 className="card-title">Address: <span className="fs-6">{address}</span></h5>
        <h5 className="card-title">Status: <span className="text-warning">{status}</span></h5>
        
        <button className="btn btn-primary" onClick={ ()=> cancelOrder(order._id)}>Cancel</button>
        <button className="btn btn-primary" onClick={() =>orderShipped(order._id)} >Shipped</button>
      </div>
    </div>
  </div>
                           
        </div>
    );
};

export default Order;