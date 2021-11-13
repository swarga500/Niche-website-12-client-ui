import React, { useState } from 'react';

const orderStatus = () => {
    
    
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {  };
        newLoginData[field] = value;
        console.log(newLoginData)
        
    };

    const handleLoginSubmit = e => {
        console.log()
    
        e.preventDefault();
    }
    return (
        <div>
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
            </form>
        </div>
    );
};

export default orderStatus;