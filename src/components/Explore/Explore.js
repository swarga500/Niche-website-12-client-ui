import React, { useEffect, useState } from 'react';
import ExploreProducts from '../ExploreProducts/ExploreProducts';
import Navbar from '../Navbar/Navbar'

const Explore = () => {
    const [products, setProducts] = useState([])

    useEffect( ()=>{
        fetch('https://glacial-spire-55948.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <Navbar></Navbar>
            <h5>explore</h5>
            <div class="row row-cols-1 row-cols-md-5 g-4">
            {
                products.map(product => <ExploreProducts
                key={product.name}
                product={product}
                products={products}
                setProducts={setProducts}
                ></ExploreProducts>)
            }
            </div>
        </div>
    );
};

export default Explore;