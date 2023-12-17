import { useState } from 'react';
import styles from './dropdownNavbar.module.scss';

const DropdownGame = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={styles.dropdownContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className={styles.dropdownBtn}>
        Game
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <a href="#">Gaming Marketplace</a>
          <a href="#">Prediction (BETA)</a>
          <a href="#">Lottery</a>
          <a href="#">Pottery (BETA)</a>
        </div>
      )}
    </div>
  );
};

export default DropdownGame;
