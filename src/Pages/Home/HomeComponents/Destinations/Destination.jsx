import React from 'react';
import s from './Destination.module.scss'
import { Card } from 'antd';
const { Meta } = Card;
import slide1 from '../../../../Assets/img/slide1.png'
import slide2 from '../../../../Assets/img/slide2.png'
import slide3 from '../../../../Assets/img/slide3.png'
import slide4 from '../../../../Assets/img/slide4.png'


const Destination = () => {
    return (
        <>
            <div id='container'>
                <div className={s.card_content}>
                    <h1>Popular Destinations</h1>
                    <div className={s.cards}>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src={slide1} />}
                        >
                            <Meta title="Venice" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
                        </Card>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src={slide2} />}
                        >
                            <Meta title="San Paolo" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                        </Card>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src={slide3} />}
                        >
                            <Meta title="Barbados" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                        </Card>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src={slide4} />}
                        >
                            <Meta title="Cyprus" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Destination;