
import styles from "./IconoWraper.module.scss";

const IconoWrapper = ({ onClick, children }) => {
    const handleClick = () => {
      onClick();
    };
  
    return (
      <div onClick={handleClick} className={styles.iconoWrapper}>
        {children}
      </div>
    );
  };
  
export default IconoWrapper;