import { useTheme } from "../../context/ThemeContext";
import { ComunidadSVG } from "../BackgroundSVG/ComunidadSVG";
import styles from "./ComunidadSection.module.scss";

export function ComunidadSection({ children }) {
  const { theme } = useTheme();
  return (
    <>
      {theme === "dark" ? (
        <section className={styles.ComunidadDark}><ComunidadSVG />{children}
        <div className={styles.socialIcons}>
            <img className={styles.discord} src="../Assets/Images/asset78.png" alt="Discord Icon" />
            <img className={styles.instagram} src="../Assets/Images/asset76.png" alt="Instagram Icon" />
            <img className={styles.telegram} src="../Assets/Images/asset77.png" alt="Telegram Icon" />
            <img className={styles.x} src="../Assets/Images/asset79.png" alt="X Icon" />
            </div>
            <div className={styles.rightIcons}>
            <img className={styles.comment} src="../Assets/Images/asset1.png" alt="Comment Icon" />
            <img className={styles.ring} src="../Assets/Images/asset2.png" alt="Ring Icon" />
            <img className={styles.heart} src="../Assets/Images/asset3.png" alt="Like Icon" />
            <img className={styles.speaker} src="../Assets/Images/asset4.png" alt="Speaker Icon" />
            <img className={styles.comment2} src="../Assets/Images/asset5.png" alt="Comment Icon" />
            </div>
            <div className={styles.leftResponsiveIcons}>
            <img className={styles.leftRing} src="../Assets/Images/asset2.png" alt="Ring Icon" />
            <img className={styles.pinkComment} src="../Assets/Images/asset1.png" alt="Comment Icon" />
            </div>
            </section>
      ) : (
        <section className={styles.ComunidadLight}><ComunidadSVG />{children}</section>
      )}
    </>
  );
}