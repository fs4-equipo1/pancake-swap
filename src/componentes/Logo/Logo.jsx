import styles from "./Logo.module.scss";
import { useTheme } from "../../context/ThemeContext";
import logoBlanco from "../../../public/assets/logoPancakeBlanco.png";
import logoPancake from "../../../public/assets/logoPancake.png";
import conejoResponsive from "../../../public/assets/conejoResponsive.png";
export function Logo({ isInverted }) {
  const { theme } = useTheme();
  return (
    <div className={styles.pancakeLogo}>
      {theme === "dark" ? (
        <>
          <img src={logoBlanco} className={styles.logoImage} />
        </>
      ) : (
        <>
          <img
            src={logoPancake}
            className={styles.logoImage}
          />
        </>
      )}
      <img
        src={conejoResponsive}
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
