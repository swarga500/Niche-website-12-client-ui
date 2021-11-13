import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';

const AddProduct = () => {
    const [product, setProduct] = useState({});
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newData = {...product};
        newData[field] = value;
        setProduct(newData)
    }
    const handleProduct = e =>{
         fetch('https://glacial-spire-55948.herokuapp.com/products', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    alert('Review posted')
    e.target.value('')
    //  console.log(product)
    e.preventDefault()
    }
    return (
        <div>
            <Dashboard></Dashboard>
            <h1>add a product</h1>
            <form onSubmit={handleProduct} className="w-50 mx-auto mt-3">
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                    <input type="text" name="name" placeholder="product name" onBlur={handleOnBlur} className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">price</label>
                    <div className="col-sm-10">
                    <input type="number" name="price" placeholder="price" onBlur={handleOnBlur} className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Descriptiion</label>
                    <div className="col-sm-10">
                    <input type="text" name="description" placeholder="description" onBlur={handleOnBlur} className="form-control" id="inputPassword3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Image </label>
                    <div className="col-sm-10">
                    <input type="text" name="img" placeholder="Image link" onBlur={handleOnBlur} className="form-control" id="inputPassword3" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Post product</button>
                
            </form>
        </div>
    );
};

export default AddProduct;