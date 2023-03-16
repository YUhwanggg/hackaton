import React from 'react';
import './HomePage.css'
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Hero from './HomeComponents/Hero/Hero';
import Destination from './HomeComponents/Destinations/Destination';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Destination />
        </>
    );
};

export default HomePage;