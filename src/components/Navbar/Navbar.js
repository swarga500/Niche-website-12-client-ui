import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/UseFirebase/UseFirebase';

const Navbar = () => {
  const {user, logOut} = useFirebase()
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link class="navbar-brand" to="/">Bike Bazar</Link>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to='/home'>Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/about'>About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/contact'>Contact</Link>
              </li>
              
            </ul>
            <div>
            </div>
            <div class="d-flex">
                <Link className="nav-link" to='/explore'>Explore</Link>
                <Link className="nav-link" to='/dashboard'>DashBord</Link>
                <Link className="nav-link" to='/register'>Register</Link>
                {user?.email ? <button onClick={logOut} className="btn btn-info">LogOut</button> :
                  <Link className="nav-link" to="/login">Login</Link>}
              
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;