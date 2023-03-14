import React from 'react';
import './HomePage.css'
import Footer from './HomeComponents/Footer/Footer';
import Header from './HomeComponents/Header/Header';
import Hero from './HomeComponents/Hero/Hero';
import Destination from './HomeComponents/Destinations/Destination';
import Slider from './HomeComponents/Slider/Slider';
import Why from './HomeComponents/Why/Why';

const HomePage = () => {
    return (
        <>
            <Header />
            <Hero />
            <Destination />
            <Slider />
            <Why />
            <Footer />
        </>
    );
};

export default HomePage;