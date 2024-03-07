import { useState } from "react";
import styles from "./PishingWarning.module.scss"
import { useTranslation } from "react-i18next";
import warningImg from "../../../Assets/Images/phishing-warning-bunny.webp"

export function PishingWarning() {
    const { t } = useTranslation();
    const [isActive, setIsActive] = useState(true);

  const handleClickCloseWarning = () => {
    setIsActive(false);
  };
    return(
        <>
            {isActive && (
                <div height="70" className={styles.header}>
                    <div className={styles.headerContent}>
            <div className={styles.headerImg}>
                <img src={warningImg} alt="phishing-warning" className={styles.phishingImg}></img>
                <div className={styles.headerCard}>
                    <span className={styles.phishing}>{t("WarningTitle")}</span>
                    <span className={styles.text}>{t("WarningText")}</span>
                    <span className={styles.link}>{t("WarningURL")}</span>
                    <span className={styles.text}>{t("WarningText2")}</span>
                </div>
            </div>
            
            <button className={styles.closeBtn} onClick={() => {
              handleClickCloseWarning();
            }} variant="text" scale="md">
                <svg viewBox="0 0 24 24" color="#FFFFFF" width="20px" xmlns="http://www.w3.org/2000/svg" className={styles.closeIcon}>
                    <path fill="currentColor"
                        d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z">
                    </path>
                </svg>
            </button>
        </div>
    </div>
            )}
        </> 
    )
}