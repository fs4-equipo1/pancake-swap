import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";


const Modal = ({ isOpen, onClose, children, onClick, modal}) => {
  const [modalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef();

   function openModal(modal){
    setModalOpen(true);
    onClick && onClick();
  };

   function closeModal(modal){
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
      {modalOpen && (
        <div className={styles.modal} ref={modalRef}>
          <div className={styles.modalContent}>
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
  modal: PropTypes.string.isRequired,
};

export default Modal;

