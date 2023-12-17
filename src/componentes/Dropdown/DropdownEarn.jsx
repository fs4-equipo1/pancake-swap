import { useState } from 'react';
import styles from './dropdownNavbar.module.scss';

const DropdownEarn = () => {
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
        Earn
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <a href="#">Farms</a>
          <a href="#">CAKE Staking</a>
          <a href="#">Pools</a>
          <a href="#">Position Manager</a>
          <a href="#">Liquid Staking</a>
          <a href="#">Simple Staking</a>
        </div>
      )}
    </div>
  );
};

export default DropdownEarn;
