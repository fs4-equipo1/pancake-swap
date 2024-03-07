import styles from "./DexNow.module.scss";

import background from "../../assets/background.png";
import Boton from "../Boton/Boton";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import icons from "../../../Assets/Images/floatIcons/icons";

const DexNow = ({ titleLarge }) => {
  return (
    <div>
      <div className={styles.dexTitle}>{titleLarge}</div>
    </div>
  );
};

export function DexNowSection() {
  const { t } = useTranslation();
  const { open, selectedNetworkId } = useWeb3Modal();
  const { address, isDisconnected } = useAccount();
  const [buttonText, setButtonText] = useState(
    window.innerWidth <= 800 ? t("Connect") : t("ConnectWallet")
  );
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
            <DexNow titleLarge={t("FavouriteDEX")} />
          </div>
          <div>
            {isDisconnected && (
              <Boton
                onClick={() => open({ view: "Connect" })}
                texto={buttonText}
                isBlue={true}
              />
            )}
          </div>
        </div>
        <img
          className={styles.cakeRight}
          src={icons.pancakeRight}
          alt="pancake-right"
          width="160px"
        ></img>
        <img
          className={styles.cakeLeft}
          src={icons.pancakeLeft}
          alt="pancake-left"
          width="160px"
        ></img>
        <img
          className={styles.rockLeft}
          src={icons.rockRight}
          alt="rock-right"
          width="160px"
        ></img>
        <img
          className={styles.rockRight}
          src={icons.rockLeft}
          alt="rock-right"
          width="160px"
        ></img>
      </div>
    </div>
  );
}

export default DexNowSection;
