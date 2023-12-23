import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";
import { Icono } from "../Icono/Icono";
import { IoMdSettings } from "react-icons/io";
import IconoWrapper from "../IconoWraper/IconoWraper";

const Modal = ({ isOpen, onClose, children, onClick }) => {
  const [modalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef();

  const openModal = () => {
    setModalOpen(true);
    onClick && onClick();
  };

  const closeModal = () => {
    setModalOpen(false);
    onClose && onClose();
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    setModalOpen(isOpen);

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  return (
    <div>
      <IconoWrapper onClick={openModal}>
        <Icono icono={<IoMdSettings />} />
      </IconoWrapper>

      {modalOpen && (
        <div className={styles.modal} ref={modalRef}>
          <div className={styles.modalContent}>
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
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Modal;

