import React from 'react';

const ManageProductCard = ({product,setProducts,products}) => {
    const {name,price,description,img} = product;

    const deleteProduct = id =>{
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://glacial-spire-55948.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                });
        }

    }

    
    return (
        <div className="col">
        <div className="card h-100">
          <img src={img} className=" w-75 mt-2 mx-auto card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-info">Name: <span className="fs-6 text-dark">{name}</span></h5>
            <h5 className="card-title text-info">Price: <span className="fs-6 text-dark">{price}</span></h5>
            <h5 className="card-title text-info">Name: <span className="fs-6 text-dark">{description}</span></h5>
            <button className="btn btn-info" onClick={()=>deleteProduct(product._id)}>Delete</button>
            
          </div>
        </div>
      </div>
    );
};

export default ManageProductCard;