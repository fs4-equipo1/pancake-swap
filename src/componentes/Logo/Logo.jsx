import styles from "./Logo.module.scss";
import { useTheme } from "../../context/ThemeContext";
export function Logo({ isInverted }) {
  const { theme } = useTheme();
  return (
    <div>
      {theme === 'dark' ? (
        <>
          <img src="../public/assets/logoPancakeBlanco.png" className={styles.logoImage} />
        </>
      ) : (
        <>
          <img src="../public/assets/logoPancake.png"  className={styles.logoImage} />
        </>
      )}
      <img
        src="../public/assets/conejoResponsive.png"
        alt=""
        className={styles.iconResponsive}
      />

      {/* <img
        src="../public/assets/logoPancake.png"
        alt=""
        className={styles.logoPancake}
      /> */}
    </div>
  );
}
