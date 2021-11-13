import React, { useEffect, useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import ManageProductCard from '../ManageProdrctCard/ManageProductCard';

const ManageProducts = () => {
    const [products, setProducts] = useState([])

    useEffect( ()=>{
        fetch('https://glacial-spire-55948.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <Dashboard></Dashboard>
            <h5>manage products</h5>
            <div class="row row-cols-1 row-cols-md-5 g-4">
            {
                products.map(product => <ManageProductCard
                key={product.name}
                product={product}
                products={products}
                setProducts={setProducts}
                ></ManageProductCard>)
            }
            </div>
        </div>
    );
};

export default ManageProducts;