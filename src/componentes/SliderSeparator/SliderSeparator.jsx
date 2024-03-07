import { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import styles from "./SliderSeparator.module.scss";
import { IoMdEgg } from "react-icons/io";
import icons from "../../../Assets/Images/SliderImages/sliderImages";

function SliderSeparator() {
  const { theme } = useTheme();
  return (
    <>
      <div className={styles.imgSeparator}>
        <video
          src={icons.videoMoneda}
          alt="Slider Separator" 
          className={styles.coin}
          autoPlay  
          muted 
          playsInline // Esto ayuda a prevenir ciertas restricciones en iOS
        />
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
