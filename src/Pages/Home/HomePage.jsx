import React from 'react';
import './HomePage.css'
import Footer from './HomeComponents/Footer/Footer';
import Header from './HomeComponents/Header/Header';
import Hero from './HomeComponents/Hero/Hero';

const HomePage = () => {
    return (
        <>
            <Header />
            <Hero />
            <Footer />
        </>
    );
};

export default HomePage;