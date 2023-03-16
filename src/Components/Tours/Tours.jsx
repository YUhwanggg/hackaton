import React, { useState } from "react";
import style from "./Tours.module.scss";
import { tourData } from "../../Constants/tour";
import Tour from "../Tour/Tour";
import ModalTour from "../ModalTour/ModalTour";

const Tours = () => {
  const [tourIndex, setTourIndex] = useState(-1);
  const [modal, setModal] = useState(false);
  const handleClickTour = (index) => {
    setTourIndex(index)
    setModal(true)
  }
  return (
    <section className={style.main}>
      <div className="container">
        <div className={style.main_title}>
          <h2>Have an Adventure Today</h2>
        </div>
        <div className={style.tours}>
          {tourData.map((item, index) => {
            return (
              <>
                <Tour
                  title={item.title}
                  text={item.text}
                  src={item.img}
                  index={index}
                  handleClickTour={handleClickTour}
                  key={item.id}
                />
                {modal === true && tourIndex === index ? (
                  <ModalTour
                    setModal={setModal}
                    title={item.title}
                    text={item.text}
                    img={item.img}
                  />
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
