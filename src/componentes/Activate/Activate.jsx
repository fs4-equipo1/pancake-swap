import React, { useState } from 'react';
import styles from './Activate.module.scss';

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
<label className={styles.switch}>
  <input type="checkbox" />
  <span className={styles.slider}></span>
</label>
  );
};

export default ToggleSwitch;
