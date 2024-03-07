import { t } from "i18next";
import styles from "./VerticalRightSlider.module.scss";
import icons from "../../../Assets/Images/SliderImages/sliderImages";

function VerticalRightSlider() {
  return (
    <div className={styles.containerR}>
      <div className={styles.titleInfinite}>
      <div className={styles.lineVertical}></div>
        <div className={styles.titleSlider}>
          <h2>{t("Partners")}</h2>
        </div>
        <div className={styles.scroll}>
          <div>
            <span className={styles.scrollAptos}>
              <img src={icons.metamask}></img>Metamask
            </span>
            <span className={styles.scrollEthereum}>
              <img src={icons.ledger}></img>Ledger
            </span>
            <span className={styles.scrollPolygon}>
              <img src={icons.alpaca}></img>Alpaca Finance
            </span>
            <span className={styles.scrollZksync}>
              <img src={icons.venus}></img>Venus
            </span>
            <span className={styles.scrollArbitrum}>
              <img src={icons.apolloX}></img>ApolloX
            </span>
          </div>
          <div>
            <span className={styles.scrollAptos}>
              <img src={icons.metamask}></img>Metamask
            </span>
            <span className={styles.scrollEthereum}>
              <img src={icons.ledger}></img>Ledger
            </span>
            <span className={styles.scrollPolygon}>
              <img src={icons.alpaca}></img>Alpaca Finance
            </span>
            <span className={styles.scrollZksync}>
              <img src={icons.venus}></img>Venus
            </span>
            <span className={styles.scrollArbitrum}>
              <img src={icons.apolloX}></img>ApolloX
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalRightSlider;
