import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useFirebase from '../Hooks/UseFirebase/UseFirebase';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const {user, loginUser,isLoading, authError} = useFirebase();

    const location = useLocation();
    const history = useHistory();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    };

    const handleLoginSubmit = e => {
        console.log(loginData)
        loginUser(loginData.email, loginData.password,location,history)
        // e.target.value('')
        e.preventDefault();
        
    }
    return (
        <div className="w-50 mx-auto mt-3">
            <form onSubmit={handleLoginSubmit}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input type="email" name="email" onBlur={handleOnBlur}  className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input type="password" name="password" onBlur={handleOnBlur} className="form-control" id="inputPassword3" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                             New User? Please Register
                        </NavLink>

                        {isLoading && <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                            </div>}
                    {user?.email && <div class="alert alert-success" role="alert">
                                            user created successfully
                                            </div>}
                    {authError && <div class="alert alert-danger" role="alert">
                                            {authError}
                                            </div>}
            </form>
        </div>
    );
};

export default Login;