import React from "react";
import style from "./ModalTour.module.scss";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const ModalTour = ({ setModal, title, text, img, key }) => {
  const [selectedId, setSelectedId] = useState(null);
  addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
      setModal(false);
    }
  });

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0},
      }}
      onClick={() => setSelectedId(key)}
      className={style.modal}
    >
      <div
        onClick={() => setModal(false)}
        className={style.modal_opacity}
      ></div>
      <div onClick={() => setModal(false)} className={style.modal_main}>
        <div>
          <span>
            <img src={img} alt="image" />
          </span>
        </div>
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ModalTour;
