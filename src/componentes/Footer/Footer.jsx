
import styles from "./Footer.module.scss"

const Footer = ({ title, item}) => {
  return (
   <footer>
    <div className={styles.footerText}>
    <ul className={styles.footerList}>
        <li className={styles.footerTitle}> {title}</li>
        <li className={styles.footerItem}> <a href=""> {item} </a></li>
    </ul>
    </div>
   </footer>
    

    
  );
};

export default Footer;
