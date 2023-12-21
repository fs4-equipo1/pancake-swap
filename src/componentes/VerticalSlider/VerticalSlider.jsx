import styles from "./VerticalSlider.module.scss"

function VerticalSlider() {
    return (
        <div className={styles.containerL}>

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

    </div>
    )
}

export default VerticalSlider;