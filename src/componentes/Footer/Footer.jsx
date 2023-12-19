import React from 'react';
import styles from "./Footer.module.scss";

const Footer = ({ title, items }) => {
  return (
    <div className={styles.footerDiv}>
      <div className={styles.footerText}>
        <ul className={styles.footerList}>
          <li className={styles.footerTitle}>{title}</li>
          {items.map((item, index) => (
            <li key={index} className={styles.footerItem}>
              <a href="">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;