import styles from "./VerticalSlider.module.scss";
import Boton from "../Boton/Boton";
import SliderSeparator from "../SliderSeparator/SliderSeparator";

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
      <div className={styles.titleSlider}><h2>Partners</h2></div>
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
      <div> <SliderSeparator/> </div>
      </div>
   
);

}



export default VerticalSlider;

