import React, { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.scss';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <button onClick={toggleTheme} className={`${styles.toggleButton} ${styles[theme]}`}>
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