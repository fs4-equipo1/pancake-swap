import styles from "./VerticalSlider.module.scss";
import Boton from "../Boton/Boton";

function VerticalSlider() {
  return (

    <div className={styles.containerL}>
      <div className={styles.containerText}>
      <div className={styles.titleCake}>
        <p>Unlock the Full Potential of DeFi with </p>   <div className={styles.cake}><p>CAKE</p></div>
      
        </div>
      
      <div className={styles.experienceP}>
        <p>Experience the power of community ownership, global governance, and explore infinite use cases within the PancakeSwap ecosystem</p>
      </div>
     
      <div className={styles.buyCake}>
        <Boton texto={"BUY CAKE"} isBlue={true}/>
        <Boton texto={"Learn"} isLearn={true}/>
      </div>
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
  );
}

export default VerticalSlider;
