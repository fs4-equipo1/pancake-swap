import styles from "./DexNow.module.scss";

import background from "../../assets/background.png";
import Boton from "../Boton/Boton";
const DexNow = ({ titleLarge }) => {
  return (
    <div>
      <div className={styles.dexTitle}>{titleLarge}</div>
    </div>
  );
};

export function DexNowSection() {
  return (
    <div
      className={styles.DexNowSection}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <div>
            <DexNow titleLarge={"Join Everyone's Favorite DEX Now!"} />
          </div>
          <div>
            <Boton texto={"Connect Wallet"} isBlue={true} />
          </div>
        </div>
        <img
          className={styles.cakeRight}
          src="../../Assets/Images/asset33.png"
          alt="pancake-right"
          width="160px"
        ></img>
        <img
          className={styles.cakeLeft}
          src="../../Assets/Images/asset32.png"
          alt="pancake-left"
          width="160px"
        ></img>
        <img
          className={styles.rockLeft}
          src="../../Assets/Images/asset35.png"
          alt="rock-right"
          width="160px"
        ></img>
        <img
          className={styles.rockRight}
          src="../../Assets/Images/asset34.png"
          alt="rock-right"
          width="160px"
        ></img>
      </div>
    </div>
  );
}

export default DexNowSection;
