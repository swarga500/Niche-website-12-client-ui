import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect( ()=>{
        fetch('https://glacial-spire-55948.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <h1>product</h1>
            <div class="row row-cols-1 row-cols-md-4 g-4">
            {
                products.slice(0,6).map(product => <Product
                key={product.name}
                product={product}
                ></Product>)
            }
            </div>
        </div>
    );
};

export default Products;