import React from 'react'
import style from './ModalTour.module.scss'

const ModalTour = ({setModal, title, text, img}) => {
  return (
    <div className={style.modal}>
        <div className={style.modal_opacity} onClick={() => setModal(false)}></div>
        <div className={style.modal_main}>
            <div>
                <span><img src={img} alt="image" /></span>
            </div>
            <div>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default ModalTour