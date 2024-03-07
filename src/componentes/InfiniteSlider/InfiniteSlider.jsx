import { ShapingFuture } from "../BackgroundSections/ShapingFuture";
import Tipografia from "../Tipografia/Tipografia";
import styles from "./InfiniteSlider.module.scss";
import { useTranslation } from "react-i18next";
import icons from "../../../Assets/Images/SliderImages/sliderImages";

export function InfiniteSlider() {
  const { t } = useTranslation();
  return (
    <ShapingFuture>
    <section className={styles.shapfuture}>
    <div className={styles.containerL}>
    <div className={styles.shapingSection}>
      <div className={styles.titlesContainer}>
        <Tipografia isSubtitleLarge color={'--colors-text'} texto={t("titleIS")}/>
        <Tipografia isSubtitleLarge color={'--colors-text'} texto={t("subtitleIS")}/>
      </div>
      <div className={styles.numberscontainer}>
        <div className={styles.numberscard}>
          <div className={styles.totaltitle}>{t("TotalUsers")}</div>
          <div className={styles.totalnumbers}>1,267,400</div>
          <div className={styles.lastdays}>{t("last30days")}</div>
        </div>
        <div className={styles.numberscard}>
        <div className={styles.totaltitle}>{t("TotalTraders")}</div>
        <div className={styles.totalnumbers}>18,912,145</div>
        <div className={styles.lastdays}>{t("last30days")}</div>
        </div>
        <div className={styles.numberscard}>
          <div className={styles.totaltitle}>{t("TotalValue")}</div>
          <div className={styles.totalnumbers}>1,521,686,350$</div>
          <div className={styles.lastdays}>{t("last30days")}</div>
        </div>
      </div>
      <div className={styles.scroll}>
        <div>
          <span className={styles.scrollAptos}>
            <img src={icons.aptos}></img>Aptos
          </span>
          <span className={styles.scrollEthereum}>
            <img src={icons.ethereum}></img>Ethereum
          </span>
          <span className={styles.scrollPolygon}>
            <img src={icons.polygon}></img>Polygon zkEVM
          </span>
          <span className={styles.scrollZksync}>
            <img src={icons.zkSync}></img>zkSync Era
          </span>
          <span className={styles.scrollArbitrum}>
            <img src={icons.arbitrum}></img>Arbitrum One
          </span>
          <span className={styles.scrollLinea}>
            <img src={icons.linea}></img>Linea
          </span>
          <span className={styles.scrollBase}>
            <img src={icons.base}></img>Base
          </span>
          <span className={styles.scrollBNB}>
            <img src={icons.bnb}></img>BNB Chain
          </span>
        </div>
        <div>
          <span className={styles.scrollAptos}>
            <img src={icons.aptos}></img>Aptos
          </span>
          <span className={styles.scrollEthereum}>
            <img src={icons.ethereum}></img>Ethereum
          </span>
          <span className={styles.scrollPolygon}>
            <img src={icons.polygon}></img>Polygon zkEVM
          </span>
          <span className={styles.scrollZksync}>
            <img src={icons.zkSync}></img>zkSync Era
          </span>
          <span className={styles.scrollArbitrum}>
            <img src={icons.arbitrum}></img>Arbitrum One
          </span>
          <span className={styles.scrollLinea}>
            <img src={icons.linea}></img>Linea
          </span>
          <span className={styles.scrollBase}>
            <img src={icons.base}></img>Base
          </span>
          <span className={styles.scrollBNB}>
            <img src={icons.bnb}></img>BNB Chain
          </span>
        </div>
      </div>
      <div className={styles.leftball}>
            <img src={icons.bnbBall} alt="BNB-ball-rocket" />
          </div>
          <div className={styles.rightball}>
            <img src={icons.ethBall} alt="ETH-ball-rocket" />
          </div>
          <div className={styles.middleball}>
            <img src={icons.aptosBall} alt="Aptos-ball-rocket" />
        </div>

    </div>
    </div>
    </section>
    </ShapingFuture>
  );
}

export default InfiniteSlider;
