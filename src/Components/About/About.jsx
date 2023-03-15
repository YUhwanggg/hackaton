import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import s from './About.module.scss'
import { Card, message } from 'antd';

const About = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_rnkeocu', 'template_cxwrf3v', form.current, 'rVxs1omlSkc0Q3S1P')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';
    const openMessage = () => {
        messageApi.open({
            key,
            type: 'loading',
            content: 'Loading...',
            style: {
                marginTop: '100px',
            }
        });
        setTimeout(() => {
            messageApi.open({
                key,
                type: 'success',
                content: 'Sent!',
                duration: 2,
                style: {
                    marginTop: '100px',
                }
            });
        }, 1000);
    };
    return (
        <>
            <div id='container'>
                <div className={s.content}>
                    <h1>About Us</h1>
                    <div className={s.cards}>
                        <Card
                            style={{
                                width: 280,
                                height: 300,
                                padding: 30,
                                display: 'flex',
                                justifyContent: 'center',
                                boxShadow: '0px 0px 1px rgba(0 0 0.25)'
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
                                boxShadow: '0px 0px 1px rgba(0 0 0.25)'
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
                                boxShadow: '0px 0px 1px rgba(0 0 0.25)'
                            }}
                        >
                            <h1>EXPERIENCE</h1>
                            <p>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit.</p>
                        </Card>
                    </div>
                    <div className={s.contact}>
                        <h1>Связаться</h1>
                        <p>Обращайтесь к нам по почте</p>
                        <form ref={form} onSubmit={sendEmail} className={s.btn}  >
                            <input type="email" name="user_email" placeholder='Введти свою почту' />
                            {contextHolder}
                            <button value="send" type='submit' onClick={openMessage}>
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;