import React from 'react';
import s from './Hero.module.scss'
import banner from '../../../../Assets/banner.png'
import location from '../../../../Assets/location_hero.png'
import { Carousel } from 'antd';

const Hero = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <>
            <Carousel
                dots={false}
                style={{
                    position: 'absolute',
                    zIndex: -10,
                    left: 0,
                    right: 0,
                }} autoplay={true} afterChange={onChange}>
                <div>
                    <img src={banner} alt="" />
                </div>
                <div>
                    <img src={banner} alt="" />
                </div>
                <div>
                    <img src={banner} alt="" />
                </div>
                <div>
                    <img src={banner} alt="" />
                </div>
            </Carousel>
            <div className={s.section}>
                <div className={s.first}>
                    <h1>Your Dream Vacation Awaits</h1>
                    <h2>Explore the World with us.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, repellat <br /> aperiam fuga distinctio officia quod itaque deleniti sed reiciendis similique inventore. Autem <br /> voluptatem nesciunt saepe impedit in nostrum, ex libero.</p>
                </div>
            </div>
        </>
    );
};

export default Hero;