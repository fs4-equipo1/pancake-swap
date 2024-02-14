import { useTheme } from "../../context/ThemeContext";
import { CurvedSVG } from "../BackgroundSVG/CurvedSVG";
import styles from "./HeroSection.module.scss";

export function HeroSection({ children }) {
  const { theme } = useTheme();
  return (
    <>
      {theme === "dark" ? (
        <section className={styles.heroSectionDark}>
          {children}
          <CurvedSVG />
        </section>
      ) : (
        <section className={styles.heroSectionLight}>
          {children}
          <CurvedSVG />
        </section>
      )}
    </>
  );
}
