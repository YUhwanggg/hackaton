import React, { useState } from "react";
import style from "./Tours.module.scss";
import { tourData } from "../../Constants/tour";
import { motion } from "framer-motion";
import Tour from "../Tour/Tour";
import ModalTour from "../ModalTour/ModalTour";

const Tours = () => {
  const [tourIndex, setTourIndex] = useState(-1);
  const [modal, setModal] = useState(false);
  const handleClickTour = (index) => {
    setTourIndex(index);
    setModal(true);
  };
  return (
    <section className={style.main}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 },
          }}
          className={style.main_title}
        >
          <h2>Have an Adventure Today</h2>
        </motion.div>
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
                    key={item.id}
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
