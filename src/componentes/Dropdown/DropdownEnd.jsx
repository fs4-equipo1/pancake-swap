import { useState } from 'react';
import styles from './dropdownNavbar.module.scss';

const DropdownEnd = () => {
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
        ...
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <a href="#">Info</a>
          <a href="#">IFO</a>
          <a href="#">Affiliate Program</a>
          <a href="#">Voting</a>
          <hr />
          <a href="#">Leaderboard</a>
          <hr />
          <a href="#">Blog</a>

          <a href="#">Docs</a>
        </div>
      )}
    </div>
  );
};

export default DropdownEnd;
