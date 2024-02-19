import SliderSeparator from "../SliderSeparator/SliderSeparator";
import VerticalLeftSlider from "../VerticalLogoSlider/VerticalLeftSlider";
import VerticalRightSlider from "../VerticalSlider/VerticalRightSlider";
import styles from "./VerticalSliderSection.module.scss";

export function VerticalSliderSection() {
  return (
    <div className={styles.VerticalSliderSection}>
      <VerticalLeftSlider/>
      <div className={styles.lineLeft}></div>
      <SliderSeparator/>
      <div className={styles.separadorMobile}></div>
      <div className={styles.lineRight}></div>
      <VerticalRightSlider/>
    </div>
  );
}
