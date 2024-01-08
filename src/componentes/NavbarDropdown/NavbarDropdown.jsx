import { useState } from "react";
import styles from "./NavbarDropdown.module.scss";

const NavbarDropdown = ({ title, items, punto }) => {
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
      <button className={styles.dropdownBtn}>{title}</button>
      {punto && (
        <div className={styles.punto} style={{ backgroundColor: `var(--colors-${punto})` }} />
      )}
      {isOpen && (
        <div className={styles.dropdownContent}>
          {items && items.map((item) => <a href="">{item}</a>)}
          {/* {items.map((item, index) => (
            <li key={index} className={styles.dropdownBtn}>
              <a href="">{item}</a>
            </li> */}
        </div>
      )}
    </div>
  );
};

export default NavbarDropdown;
