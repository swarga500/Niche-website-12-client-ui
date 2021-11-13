import React from 'react';

const DisplayReview = ({reviewDescription}) => {
    const {name, rating, review} =reviewDescription;
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                <div className="card-body">
                    
                    <h5 className="card-title">{name}</h5>
                    <h5 className="card-title">Rating: <span className="fs-6 text-warning">{rating}</span></h5>
                    <p> {review}</p>
                    
                    
                    
                </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayReview;