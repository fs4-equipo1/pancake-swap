import styles from "./VerticalLeftSlider.module.scss";

function VerticalLeftSlider() {
  return (
    <div className={styles.containerL}>
      <div className={styles.titleInfinite}>
        <div className={styles.titleSlider}>
          <h2>Ecosystem</h2>
        </div>
        <div className={styles.scroll}>
          <div>
            <span className={styles.scrollAptos}>
              <img src="../public/images/svgexport-50.png"></img>Game
            </span>
            <span className={styles.scrollEthereum}>
              <img src="../public/images/svgexport-48.png"></img>NFT
            </span>
            <span className={styles.scrollPolygon}>
              <img src="../public/images/svgexport-47.png"></img>Trade
            </span>
            <span className={styles.scrollZksync}>
              <img src="../public/images/svgexport-51.png"></img>Governance
            </span>
            <span className={styles.scrollArbitrum}>
              <img src="../public/images/svgexport-45.png"></img>Staking
            </span>
            <span className={styles.scrollLinea}>
              <img src="../public/images/svgexport-46.png"></img>Farming
            </span>
            <span className={styles.scrollBase}>
              <img src="../public/images/svgexport-49.png"></img>Liquidity
            </span>
            <span className={styles.scrollBNB}>
              <img src="../public/images/svgexport-52.png"></img>IFO
            </span>
          </div>
          <div>
            <span className={styles.scrollAptos}>
              <img src="../public/images/svgexport-50.png"></img>Game
            </span>
            <span className={styles.scrollEthereum}>
              <img src="../public/images/svgexport-48.png"></img>NFT
            </span>
            <span className={styles.scrollPolygon}>
              <img src="../public/images/svgexport-47.png"></img>Trade
            </span>
            <span className={styles.scrollZksync}>
              <img src="../public/images/svgexport-51.png"></img>Governance
            </span>
            <span className={styles.scrollArbitrum}>
              <img src="../public/images/svgexport-45.png"></img>Staking
            </span>
            <span className={styles.scrollLinea}>
              <img src="../public/images/svgexport-46.png"></img>Farming
            </span>
            <span className={styles.scrollBase}>
              <img src="../public/images/svgexport-49.png"></img>Liquidity
            </span>
            <span className={styles.scrollBNB}>
              <img src="../public/images/svgexport-52.png"></img>IFO
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalLeftSlider;
