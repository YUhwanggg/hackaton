import React from 'react';
import './HomePage.css'
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Hero from './HomeComponents/Hero/Hero';
import Destination from './HomeComponents/Destinations/Destination';
import Slider from './HomeComponents/Slider/Slider';
import Why from './HomeComponents/Why/Why';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Destination />
            <Slider />
            <Why />
        </>
    );
};

export default HomePage;