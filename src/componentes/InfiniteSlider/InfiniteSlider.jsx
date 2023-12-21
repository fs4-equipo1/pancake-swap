import styles from "./InfiniteSlider.module.scss";

export function InfiniteSlider() {
  return (
    <section>
      <div className="sub-title-32">
        <div className="title-top">
          <p>Shaping the Future of Decentralized Trading:</p>
        </div>
        <div className="second-title">
          <p>PancakeSwap Unstoppable Expansion</p>
        </div>
      </div>
      <div className="numbers-container">
        <div className="numbers-card">
          <div className="total-title">Total Users:</div>
          <div className="total-numbers">1,267,400</div>
          <div className="last-days">in the last 30 days</div>
        </div>
        <div className="numbers-card">
          <div className="total-title">Total Traders:</div>
          <div className="total-numbers">18,912,145</div>
          <div className="last-days">in the last 30 days</div>
        </div>
        <div className="numbers-card">
          <div className="total-title">Total Value Locked:</div>
          <div className="total-numbers">1,521,686,350$</div>
          <div className="last-days">in the last 30 days</div>
        </div>
      </div>
      <div className={styles.scroll}>
        <div>
          <span className={styles.scrollAptos}>
            <img src="../public/images/svgexport-30.png"></img>Aptos
          </span>
          <span className={styles.scrollEthereum}>
            <img src="../public/images/svgexport-31.png"></img>Ethereum
          </span>
          <span className={styles.scrollPolygon}>
            <img src="../public/images/svgexport-32.png"></img>Polygon zkEVM
          </span>
          <span className={styles.scrollZksync}>
            <img src="../public/images/svgexport-33.png"></img>zkSync Era
          </span>
          <span className={styles.scrollArbitrum}>
            <img src="../public/images/svgexport-34.png"></img>Arbitrum One
          </span>
          <span className={styles.scrollLinea}>
            <img src="../public/images/svgexport-35.png"></img>Linea
          </span>
          <span className={styles.scrollBase}>
            <img src="../public/images/svgexport-36.png"></img>Base
          </span>
          <span className={styles.scrollBNB}>
            <img src="../public/images/svgexport-29.png"></img>BNB Chain
          </span>
        </div>
        <div>
          <span className={styles.scrollAptos}>
            <img src="../public/images/svgexport-30.png"></img>Aptos
          </span>
          <span className={styles.scrollEthereum}>
            <img src="../public/images/svgexport-31.png"></img>Ethereum
          </span>
          <span className={styles.scrollPolygon}>
            <img src="../public/images/svgexport-32.png"></img>Polygon zkEVM
          </span>
          <span className={styles.scrollZksync}>
            <img src="../public/images/svgexport-33.png"></img>zkSync Era
          </span>
          <span className={styles.scrollArbitrum}>
            <img src="../public/images/svgexport-34.png"></img>Arbitrum One
          </span>
          <span className={styles.scrollLinea}>
            <img src="../public/images/svgexport-35.png"></img>Linea
          </span>
          <span className={styles.scrollBase}>
            <img src="../public/images/svgexport-36.png"></img>Base
          </span>
          <span className={styles.scrollBNB}>
            <img src="../public/images/svgexport-29.png"></img>BNB Chain
          </span>
        </div>
      </div>
    </section>
  );
}

export default InfiniteSlider;
