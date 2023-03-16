import React from "react";
import style from "./Tour.module.scss";

const Tour = ({ title, text, src, index, handleClickTour}) => {
  return (
    <div onClick={() => handleClickTour(index)} className={style.tours_tour}>
      <img
        className={style.tour_background}
        src={src}
        alt="background"
      />
      <div className={style.tours_tour_information}>
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Tour;
