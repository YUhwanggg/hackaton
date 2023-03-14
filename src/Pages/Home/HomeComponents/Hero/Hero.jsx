import React from 'react';
import s from './Hero.module.scss'
import banner from '../../../../Assets/banner.png'
import location from '../../../../Assets/location_hero.png'

const Hero = () => {
    return (
        <div>
            <main>
                <img className={s.banner} src={banner} alt="" />
                <div className={s.section}>
                    <div className={s.first}>
                        <h1>Your Dream Vacation Awaits</h1>
                        <h2>Explore the World with us.</h2>
                    </div>
                    <div className={s.second}>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Hero;