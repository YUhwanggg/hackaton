import React from 'react';
import s from './Why.module.scss'
import { Card } from 'antd';

const Why = () => {
    return (
        <>
            <div id='container'>
                <div className={s.content}>
                    <h1>Why Us?</h1>
                    <div className={s.cards}>
                        <Card
                            style={{
                                width: 280,
                                height: 300,
                                padding: 30,
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <h1>GUARANTEE</h1>
                            <p>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit. </p>
                        </Card>
                        <Card
                            style={{
                                width: 280,
                                height: 300,
                                padding: 30,
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <h1>SERVICE</h1>
                            <p>Nunc vulputate libero et velit interdum, ac <br /> aliquet odio. </p>
                        </Card>
                        <Card
                            style={{
                                width: 280,
                                height: 300,
                                padding: 30,
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <h1>EXPERIENCE</h1>
                            <p>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit.</p>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Why;