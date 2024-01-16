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
      <div>
        <DexNow titleLarge={"Join Everyone's Favorite DEX Now!"} />
      </div>
      <div>
        <Boton texto={"Connect Wallet"} isBlue={true} />
      </div>
    </div>
  );
}

export default DexNowSection;
