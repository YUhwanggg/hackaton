import React from 'react';
import { Carousel } from 'antd';
import banner2 from '../../../../Assets/img/banner2.png'
import s from './Slider.module.scss'


const Slider = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <>
            <div className={s.carousel}>
                <Carousel dots={false} autoplay={true} afterChange={onChange}>
                    <div>
                        <img src={banner2} alt="slide" />
                    </div>
                    <div>
                        <img src={banner2} alt="slide" />
                    </div>
                    <div>
                        <img src={banner2} alt="slide" />
                    </div>
                    <div>
                        <img src={banner2} alt="slide" />
                    </div>
                    <div>
                        <img src={banner2} alt="slide" />
                    </div>
                </Carousel>
            </div>
        </>
    );
};

export default Slider;