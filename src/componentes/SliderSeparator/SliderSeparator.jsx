import { useTheme } from "../../context/ThemeContext";
import styles from "./SliderSeparator.module.scss";
function SliderSeparator() {
  const { theme } = useTheme();
  return (
    <>
      <div className={styles.imgSeparator}>
        <img src="..\src\assets\conejito.png" alt="Slider Separator" />
        {theme === "dark" ? (
          <div className={styles.imgSeparatorDark}></div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default SliderSeparator;
