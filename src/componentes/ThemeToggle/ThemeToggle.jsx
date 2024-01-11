import React, { useEffect } from 'react';
import styles from './ThemeToggle.module.scss';

const ThemeToggle = ({ theme, onToggle }) => {
  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <button onClick={onToggle} className={`${styles.toggleButton} ${styles[theme]}`}>
      {theme === 'dark' ? (
        <>
          <img src="../public/images/svgexport-83.png" />
          <img src="../public/images/svgexport-85.png" alt="Dark Icon" className={styles.themeIcon}  />
        </>
      ) : (
        <>
        
          <img src="../public/images/svgexport-82.png" alt="Light Icon" className={styles.themeIcon}  />
          <img src="../public/images/svgexport-84.png" alt="Light Icon" />
        </>
      )}
    </button>
  );
};

export default ThemeToggle;