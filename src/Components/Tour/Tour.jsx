import React from "react";
import style from "./Tour.module.scss";
import { motion } from "framer-motion";

const Tour = ({ title, text, src, index, handleClickTour }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.1 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      onClick={() => handleClickTour(index)}
      className={style.tours_tour}
    >
      <img className={style.tour_background} src={src} alt="background" />
      <div className={style.tours_tour_information}>
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Tour;
