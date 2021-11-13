import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://glacial-spire-55948.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <Dashboard></Dashboard>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input name="email" type="email" onBlur={handleOnBlur} />
                <button type="submit" className="btn btn-info">Make Admin</button>
            </form>
            {success && <div class="alert alert-success" role="alert">
                            Make admin successful
                            </div>}
        </div>
    );
};

export default MakeAdmin;