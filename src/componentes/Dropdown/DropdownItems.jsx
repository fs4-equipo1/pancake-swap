import styles from './Dropdown.module.scss'
import { FaBeer } from 'react-icons/fa';
const DropdownItems = ({ items }) => {
  return (
    <div className={styles.items}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          {item.icono && <FaBeer />}
          {item.titulo}
          {item.punto && (
            <div className={styles.punto} style={{ backgroundColor: item.punto }} />
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownItems