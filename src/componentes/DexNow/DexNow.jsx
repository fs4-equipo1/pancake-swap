import styles from "./DexNow.module.scss";

import background from "../../assets/background.png";
import Boton from "../Boton/Boton";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
const DexNow = ({ titleLarge }) => {

  return (
    <div>
      <div className={styles.dexTitle}>{titleLarge}</div>
    </div>
  );
};

export function DexNowSection() {
  const { t } = useTranslation();
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
        <DexNow titleLarge={t("FavouriteDEX")} />
      </div>
      <div>
        <Boton texto={t("ConnectWallet")} isBlue={true} />
      </div>
    </div>
  );
}

export default DexNowSection;
