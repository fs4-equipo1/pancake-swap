import React from "react";
import styles from "./IconoWraper.module.scss";

export const IconoWrapper = ({ onClick, children }) => {
  function handleClick() {
    onClick();
  }

  return (
    <div onClick={handleClick} className={styles.iconoWrapper}>
      {children}
    </div>
  );
};

export default IconoWrapper;