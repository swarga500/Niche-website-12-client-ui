
import React, { useEffect, useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import useFirebase from '../Hooks/UseFirebase/UseFirebase';
import MyOrder from '../MyOrder/MyOrder';



const MyOrders = () => {
    const [mySlips, setMySlips] = useState([]);
    const {user} = useFirebase();
    console.log(user?.email)
   
    useEffect( ()=>{
        fetch('https://glacial-spire-55948.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setMySlips(data))
    },[])
    
    
    return (
        <div>
            <Dashboard></Dashboard>
            <div className="row row-cols-1 row-cols-md-5 g-4">
                
                {
                    mySlips.filter(s => s.email === user?.emai).map(filterSlip => <MyOrder
                    key={filterSlip._id}
                    filterSlip={filterSlip}
                    myslips={mySlips}
                    setMySlips={setMySlips}
                    ></MyOrder>)
                }
            </div>
        </div>
    );
};

export default MyOrders;