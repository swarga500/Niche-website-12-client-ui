import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import useFirebase from '../Hooks/UseFirebase/UseFirebase';

const Reviews = () => {
    const [review, setReview] = useState({});
    const {user} = useFirebase();
    // console.log(user.name)

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newData = {...review};
        newData[field] = value;
        setReview(newData)
    }
    const handleReview = e =>{
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        alert('Review posted')
        
         console.log(review)
        e.preventDefault();
        e.target.value('')
    }
    return (
        <div>
            <Dashboard></Dashboard>
            <h1>reviews</h1>
            <form onSubmit={handleReview} className="w-50 mx-auto mt-3">
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                    <input type="text" placeholder="your name" defaultValue={user?.displayName} name="name" onBlur={handleOnBlur} className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Rating</label>
                    <div className="col-sm-10">
                    <input type="number" name="rating" placeholder="rating out of 5" onBlur={handleOnBlur} className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Write something</label>
                    <div className="col-sm-10">
                    <textarea type="text" name="review" placeholder="write about products" onBlur={handleOnBlur} className="form-control" id="inputPassword3" />
                    </div>
                </div>
                
                <button type="submit" className="btn btn-primary">Review post</button>
                
            </form>
        </div>
    );
};

export default Reviews;