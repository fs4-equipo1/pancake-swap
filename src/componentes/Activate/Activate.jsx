import React, { useState } from 'react';
import styles from './Activate.module.scss';

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
<label class={styles.switch}>
  <input type="checkbox" />
  <span class={styles.slider}></span>
</label>
  );
};

export default ToggleSwitch;
