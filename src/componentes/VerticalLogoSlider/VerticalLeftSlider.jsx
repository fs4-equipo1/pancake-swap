import { t } from "i18next";
import styles from "./VerticalLeftSlider.module.scss";
import { useTranslation } from "react-i18next";
import icons from "../../../Assets/Images/SliderImages/sliderImages";

function VerticalLeftSlider() {
  const { t } = useTranslation();
  return (
    <div className={styles.containerL}>
      <div className={styles.titleInfinite}>
        <div className={styles.lineVertical}></div>
        <div className={styles.titleSlider}>
          <h2>{t("Ecosystem")}</h2>
        </div>
        <div className={styles.scroll}>
          <div>
            <span className={styles.scrollAptos}>
              <img src={icons.game}></img>{t("Game")}
            </span>
            <span className={styles.scrollEthereum}>
              <img src={icons.nft}></img>NFT
            </span>
            <span className={styles.scrollPolygon}>
              <img src={icons.trade}></img>{t("Trade")}
            </span>
            <span className={styles.scrollZksync}>
              <img src={icons.governance}></img>{t("Governance")}
            </span>
            <span className={styles.scrollArbitrum}>
              <img src={icons.staking}></img>{t("Staking")}
            </span>
            <span className={styles.scrollLinea}>
              <img src={icons.farming}></img>{t("Farming")}
            </span>
            <span className={styles.scrollBase}>
              <img src={icons.liquidiy}></img>{t("Liquidity")}
            </span>
            <span className={styles.scrollBNB}>
              <img src={icons.ifo}></img>IFO
            </span>
          </div>
          <div>
            <span className={styles.scrollAptos}>
              <img src={icons.game}></img>{t("Game")}
            </span>
            <span className={styles.scrollEthereum}>
              <img src={icons.nft}></img>NFT
            </span>
            <span className={styles.scrollPolygon}>
              <img src={icons.trade}></img>{t("Trade")}
            </span>
            <span className={styles.scrollZksync}>
              <img src={icons.governance}></img>{t("Governance")}
            </span>
            <span className={styles.scrollArbitrum}>
              <img src={icons.staking}></img>{t("Staking")}
            </span>
            <span className={styles.scrollLinea}>
              <img src={icons.farming}></img>{t("Farming")}
            </span>
            <span className={styles.scrollBase}>
              <img src={icons.liquidiy}></img>{t("Liquidity")}
            </span>
            <span className={styles.scrollBNB}>
              <img src={icons.ifo}></img>IFO
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalLeftSlider;
