import { useState } from 'react';
import styles from './dropdownNavbar.module.scss';

const DropdownNft = () => {
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
        NFT
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <a href="#">Overview</a>
          <a href="#">Collection</a>
          <a href="#">Activity</a>
        </div>
      )}
    </div>
  );
};

export default DropdownNft;
