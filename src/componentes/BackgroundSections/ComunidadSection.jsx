import { useTheme } from "../../context/ThemeContext";
import { ComunidadSVG } from "../BackgroundSVG/ComunidadSVG";
import styles from "./ComunidadSection.module.scss";
import icons from "../../../Assets/Images/floatIcons/icons";

export function ComunidadSection({ children }) {
  const { theme } = useTheme();
  return (
    <>
      {theme === "dark" ? (
        <section className={styles.ComunidadDark}><ComunidadSVG />{children}
        <div className={styles.socialIcons}>
            <img className={styles.discord} src={icons.discord} alt="Discord Icon" />
            <img className={styles.instagram} src={icons.instagram} alt="Instagram Icon" />
            <img className={styles.telegram} src={icons.telegram} alt="Telegram Icon" />
            <img className={styles.x} src={icons.x} alt="X Icon" />
            </div>
            <div className={styles.rightIcons}>
            <img className={styles.comment} src={icons.comment} alt="Comment Icon" />
            <img className={styles.ring} src={icons.ring} alt="Ring Icon" />
            <img className={styles.heart} src={icons.heart} alt="Like Icon" />
            <img className={styles.speaker} src={icons.speaker} alt="Speaker Icon" />
            <img className={styles.comment2} src={icons.comment2} alt="Comment Icon" />
            </div>
            <div className={styles.leftResponsiveIcons}>
            <img className={styles.leftRing} src={icons.leftRing} alt="Ring Icon" />
            <img className={styles.pinkComment} src={icons.pinkComment} alt="Comment Icon" />
            </div>
            </section>
      ) : (
        <section className={styles.ComunidadLight}><ComunidadSVG />{children}
        <div className={styles.socialIcons}>
        <img className={styles.discord} src={icons.discord} alt="Discord Icon" />
            <img className={styles.instagram} src={icons.instagram} alt="Instagram Icon" />
            <img className={styles.telegram} src={icons.telegram} alt="Telegram Icon" />
            <img className={styles.x} src={icons.x} alt="X Icon" />
            </div>
            <div className={styles.rightIcons}>
            <img className={styles.comment} src={icons.comment} alt="Comment Icon" />
            <img className={styles.ring} src={icons.ring} alt="Ring Icon" />
            <img className={styles.heart} src={icons.heart} alt="Like Icon" />
            <img className={styles.speaker} src={icons.speaker} alt="Speaker Icon" />
            <img className={styles.comment2} src={icons.comment2} alt="Comment Icon" />
            </div>
            <div className={styles.leftResponsiveIcons}>
            <img className={styles.leftRing} src={icons.leftRing} alt="Ring Icon" />
            <img className={styles.pinkComment} src={icons.pinkComment} alt="Comment Icon" />
            </div>
            </section>
      )}
    </>
  );
}