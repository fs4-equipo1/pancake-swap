import Boton from "../Boton/Boton";
import styles from "./CakePotencial.module.scss"
export function CakePotencial() { 
return (
<div className={styles.containerText}>
        <div className={styles.titleCake}>
          <p>Unlock the Full Potential of DeFi with </p>{" "}
          <div className={styles.cake}>
            <p>CAKE</p>
          </div>
        </div>

        <div className={styles.experienceP}>
          <p>
            Experience the power of community ownership, global governance, and
            explore infinite use cases within the PancakeSwap ecosystem
          </p>
        </div>

        <div className={styles.buyCake}>
          <Boton texto={"BUY CAKE"} isBlue={true} />
          <Boton texto={"Learn"} isLearn={true} />
        </div>
      </div>
      )

}

export default CakePotencial