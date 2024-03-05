import { useTheme } from "../../context/ThemeContext";
import { DiagonalSVG } from "../BackgroundSVG/DiagonalSVG";
import styles from "./ShapingFuture.module.scss";

export function ShapingFuture({ children }) {
  const { theme } = useTheme();
  return (
    <>
      {theme === "dark" ? (
        <section className={styles.shapingFutureDark}>{children}</section>
      ) : (
        <section className={styles.shapingFutureLight}>{children}</section>
      )}
      <DiagonalSVG />
    </>
  );
}
