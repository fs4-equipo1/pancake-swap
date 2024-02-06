import { ArrowLink } from "../../../Assets/Icons/ArrowLink";
import Boton from "../Boton/Boton";
import styles from "./CakePotencial.module.scss";
export function CakePotencial() {
  return (
    <div className={styles.containerText}>
      <div className={styles.titleCake}>
        <p>
          Unlock the Full Potential of DeFi with{" "}
          <span className={styles.cake}>CAKE</span>
        </p>
      </div>
      <div className={styles.experienceP}>
        <p>
          Experience the power of community ownership, global governance, and
          explore infinite use cases within the PancakeSwap ecosystem
        </p>
      </div>

      <div className={styles.buyCake}>
        <Boton texto={"BUY CAKE"} isBlue={true} />
        <Boton
          texto={"Learn"}
          isLearn={true}
          icon={<ArrowLink color={"var(--colors-primary)"} />}
        />
      </div>
    </div>
  );
}

export default CakePotencial;
