import styles from "./VerticalRightSlider.module.scss";

function VerticalRightSlider() {
  return (
    <div className={styles.containerR}>
      <div className={styles.titleInfinite}>
        <div className={styles.titleSlider}>
          <h2>Partners</h2>
        </div>
        <div className={styles.scroll}>
          <div>
            <span className={styles.scrollAptos}>
              <img src="../public/images/svgexport-54.png"></img>Metamask
            </span>
            <span className={styles.scrollEthereum}>
              <img src="../public/images/svgexport-53.png"></img>Ledger
            </span>
            <span className={styles.scrollPolygon}>
              <img src="../public/images/svgexport-56.png"></img>Alpaca Finance
            </span>
            <span className={styles.scrollZksync}>
              <img src="../public/images/svgexport-55.png"></img>Venus
            </span>
            <span className={styles.scrollArbitrum}>
              <img src="../public/images/svgexport-57.png"></img>ApolloX
            </span>
          </div>
          <div>
            <span className={styles.scrollAptos}>
              <img src="../public/images/svgexport-54.png"></img>Metamask
            </span>
            <span className={styles.scrollEthereum}>
              <img src="../public/images/svgexport-53.png"></img>Ledger
            </span>
            <span className={styles.scrollPolygon}>
              <img src="../public/images/svgexport-56.png"></img>Alpaca Finance
            </span>
            <span className={styles.scrollZksync}>
              <img src="../public/images/svgexport-55.png"></img>Venus
            </span>
            <span className={styles.scrollArbitrum}>
              <img src="../public/images/svgexport-57.png"></img>ApolloX
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalRightSlider;
