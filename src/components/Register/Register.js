import React, { useState } from 'react';

import { NavLink, useHistory } from 'react-router-dom';

import useFirebase from '../Hooks/UseFirebase/UseFirebase';
import Navbar from '../Navbar/Navbar';


const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const history = useHistory()
    const { registerUser,isLoading,user,authError} = useFirebase()
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newData = {...registerData};
        newData[field] = value;
        setRegisterData(newData)
    }
    const handleRegister = e =>{
        if(registerData.password !== registerData.password2){
            alert('Your password did not match')
            return
        }
        registerUser(registerData.email, registerData.password,registerData.name,history)
        //  e.target.value('')
        e.preventDefault()
    }
    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleRegister} className="w-50 mx-auto mt-3">
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                    <input type="text" name="name" onBlur={handleOnBlur} className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input type="email" name="email" placeholder="Email" onBlur={handleOnBlur} className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input type="password" name="password" placeholder="Password" onBlur={handleOnBlur} className="form-control" id="inputPassword3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input type="password" name="password2" placeholder="re-type password" onBlur={handleOnBlur} className="form-control" id="inputPassword3" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
                <br />
                <NavLink 
                 style={{textDecoration: "none"}}
                 to="/login">Already Registered? Please Login</NavLink>
            
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

export default Register;