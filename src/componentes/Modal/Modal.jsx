import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>{children}</div>
      <div
        className={styles.backdrop}
        onClick={() => {
          onClose();
          console.log("clicked");
        }}
      />
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  modal: PropTypes.string,
};

export default Modal;
