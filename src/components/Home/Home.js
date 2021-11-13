import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Carousel from '../Carousel/Carousel'
import Products from '../Products/Products';
import About from '../About/About';
import Contact from '../Contact/Contact';
import DisplayReviews from '../DisplayReviews/DisplayReviews';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <Products></Products>
            <DisplayReviews></DisplayReviews>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;