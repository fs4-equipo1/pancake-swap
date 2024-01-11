import React, { useState } from 'react';
import styles from './Activate.module.scss';

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={`${styles['toggle-switch']} ${isToggled ? styles.toggled : ''}`} onClick={handleToggle}>
      <div className={styles.slider}></div>
    </div>
  );
};

export default ToggleSwitch;
