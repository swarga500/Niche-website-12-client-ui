import React, { useState } from 'react';
import useFirebase from '../Hooks/UseFirebase/UseFirebase';

const Purchase = () => {
    const [purchaseData, setPurchaseData] = useState({});
    const {user} = useFirebase();
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newData = {...purchaseData};
        newData[field] = value;
        setPurchaseData(newData)

    }
    const handlePurchase = e =>{
        
        const purchase = { ...purchaseData, status: 'pending'}
        // console.log(orderData)
        

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
        alert('purchase success full');
        e.target.value('')

        e.preventDefault();
        
    }
    
    

    return (
        <div className="w-50 mx-auto mt-3">
        <form onSubmit={handlePurchase}>
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                <input type="text" name="name" defaultValue={user?.displayName} onBlur={handleOnBlur} className="form-control" id="inputEmail3" />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input type="email" name="email" defaultValue={user?.email} placeholder="Email" onBlur={handleOnBlur} className="form-control" id="inputEmail3" />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Address</label>
                <div className="col-sm-10">
                <input type="text" name="address" placeholder="Address" onBlur={handleOnBlur} className="form-control" id="inputPassword3" />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">phone Numder</label>
                <div className="col-sm-10">
                <input type="number" name="phone" placeholder="Phone number" onBlur={handleOnBlur} className="form-control" id="inputPassword3" />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Purchase</button>
            
        </form>
    </div>
    );
};

export default Purchase;