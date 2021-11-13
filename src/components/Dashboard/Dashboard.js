import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/UseFirebase/UseFirebase';

const Dashboard = () => {
  
  const {logOut, admin} = useFirebase()
    return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <h5 class="navbar-brand">Dashboard</h5>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/myOrders'>My Orders</Link>
        </li>
        {admin && <>
          <li class="nav-item">
          <Link class="nav-link" to='/manageOrders'>Manage orders</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/manageProducts'>Manage products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/addproduct'>Add a Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/makeadmin'>Make Admin</Link>
        </li>
          </>}
        <li class="nav-item">
          <Link class="nav-link" to='/reviews'>Reviews</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/pay'>Pay</Link>
        </li>
        <li class="nav-item">
          <button onClick={logOut} className="btn btn-light">LogOut</button>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
           

        </div>
    );
};

export default Dashboard;