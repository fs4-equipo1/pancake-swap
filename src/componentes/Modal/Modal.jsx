
import React, { useState } from "react";
import PropTypes from 'prop-types';
import styles from './Modal.module.scss'
import IconoWrapper from "../../IconoWraper/IconoWraper";
import { Icono } from "../Icono/Icono";
import { IoMdSettings } from "react-icons/io";


export const Modal = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    console.log('Modal is open');

  };

  const closeModal = () => {
    setIsOpen(false);
    console.log('Modal is closed');

  };

  return (
    <div>
        <IconoWrapper onClick={openModal}>
        <Icono icono={<IoMdSettings />}/>
        </IconoWrapper>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modal-content}>
            <button className={styles.close} onClick={closeModal} aria-label="Close">
              &times;
            </button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
