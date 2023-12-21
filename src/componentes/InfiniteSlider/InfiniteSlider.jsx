import styles from "./InfiniteSlider.module.scss";

export function InfiniteSlider() {
  return (
    <section className={styles.shapfuture}>
    <div className={styles.containerL}>
    <div className={styles.shapingSection}>
      <div className={styles.subtitle32}>
        <div className={styles.titletop}>
          <p>Shaping the Future of Decentralized Trading:</p>
        </div>
        <div className={styles.secondtitle}>
          <p>PancakeSwap Unstoppable Expansion</p>
        </div>
      </div>
      <div className={styles.numberscontainer}>
        <div className={styles.numberscard}>
          <div className={styles.totaltitle}>Total Users:</div>
          <div className={styles.totalnumbers}>1,267,400</div>
          <div className={styles.lastdays}>in the last 30 days</div>
        </div>
        <div className={styles.numberscard}>
        <div className={styles.totaltitle}>Total Traders:</div>
        <div className={styles.totalnumbers}>18,912,145</div>
        <div className={styles.lastdays}>in the last 30 days</div>
        </div>
        <div className={styles.numberscard}>
          <div className={styles.totaltitle}>Total Value Locked:</div>
          <div className={styles.totalnumbers}>1,521,686,350$</div>
          <div className={styles.lastdays}>in the last 30 days</div>
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
      <div className={styles.leftball}>
            <img src="../public/images/asset14.png" alt="BNB-ball-rocket" />
          </div>
          <div className={styles.rightball}>
            <img src="../public/images/asset16.png" alt="ETH-ball-rocket" />
          </div>
          <div className={styles.middleball}>
            <img src="../public/images/asset15.png" alt="Aptos-ball-rocket" />
        </div>

    </div>
    </div>
    </section>
  );
}

export default InfiniteSlider;
