import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {name,price,description,img} = product;
    return (
        <div className="col">
        <div className="card h-100">
          <img src={img} className=" w-75 mt-2 mx-auto card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-info">Name: <span className="fs-6 text-dark">{name}</span></h5>
            <h5 className="card-title text-info">Price: <span className="fs-6 text-dark">{price}</span></h5>
            <h5 className="card-title text-info">Name: <span className="fs-6 text-dark">{description}</span></h5>
            <Link to='/purchase'><button className="btn btn-info">Buy Now</button></Link>
            
          </div>
        </div>
      </div>
    );
};

export default Product;