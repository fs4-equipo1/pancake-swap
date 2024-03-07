import React, { useEffect } from "react";
import styles from "./ThemeToggle.module.scss";
import { useTheme } from "../../context/ThemeContext";
import darkIcon from "../../../public/images/svgexport-85.png"
import lightIcon from "../../../public/images/svgexport-82.png"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`${styles.toggleButton} ${styles[theme]}`}
    >
      {theme === "dark" ? (
        <>
          <img src="../public/images/svgexport-83.png" />
          <img
            src={darkIcon}
            alt="Dark Icon"
            className={styles.themeIcon}
          />
        </>
      ) : (
        <>
          <img
            src={lightIcon}
            alt="Light Icon"
            className={styles.themeIcon}
          />
          <img src="../public/images/svgexport-84.png" alt="Light Icon" />
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
