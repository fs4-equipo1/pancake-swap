import { useState } from "react";
import styles from "./Dropdown.module.scss";
import DropdownItems from "./DropdownItems";
const Dropdown = ({ titulo, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={styles.dropdown}>{titulo}</div>
      {isOpen && <DropdownItems items={items} />}
    </div>
  );
};



export default Dropdown;
