import { useState } from 'react';
import styles from './DropdownNavbar.module.scss';

const DropdownTrade = () => {
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
        Trade
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <a href="#">Swap</a>
          <a href="#">Liquidity</a>
          <a href="#">Perpetual</a>
          <a href="#">Bridge</a>
          <a href="#">Limit (V2)</a>
          <a href="#">Buy Crypto</a>
          <a href="#">Trading Reward</a>
        </div>
      )}
    </div>
  );
};

export default DropdownTrade;
