import React, { useEffect, useState } from 'react';
import DisplayReview from '../DisplayReview/DisplayReview';

const DisplayReviews = () => {
    const [reviews, setReviews] = useState([]);
    

    useEffect( ()=>{
        fetch('https://glacial-spire-55948.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div>
            <h1>Reviews</h1>
            <div className="row row-cols-1 row-cols-md-5 g-4">
            {
                reviews.map(reviewDescription => <DisplayReview
                key={reviewDescription._id}
                reviewDescription ={reviewDescription}
                
                ></DisplayReview>)
            }
            </div>
        </div>
    );
};

export default DisplayReviews;