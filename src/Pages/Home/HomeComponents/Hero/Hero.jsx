import React from "react";
import s from "./Hero.module.scss";
import banner1 from "../../../../Assets/img/banner1.jpg";
import banner2 from "../../../../Assets/img/banner2.jpg";
import banner3 from "../../../../Assets/img/banner3.jpg";
import banner4 from "../../../../Assets/img/banner4.jpg";
import { Carousel } from "antd";
import { motion } from "framer-motion";

const Hero = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <section className={s.main}>
      <Carousel
        dots={false}
        style={{
          zIndex: -10,
          left: 0,
          right: 0,
        }}
        autoplay={true}
        afterChange={onChange}
      >
        <div>
          <img src={banner1} alt="slide" />
        </div>
        <div>
          <img src={banner2} alt="slide" />
        </div>
        <div>
          <img src={banner3} alt="slide" />
        </div>
        <div>
          <img src={banner4} alt="slide" />
        </div>
      </Carousel>
      <div className={s.section}>
        <div className={s.first}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
          >
            Your Dream Vacation Awaits
          </motion.h1>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
          >
            Explore the World with us.
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
            repellat <br /> aperiam fuga distinctio officia quod itaque deleniti
            sed reiciendis similique inventore. Autem <br /> voluptatem nesciunt
            saepe impedit in nostrum, ex libero.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
