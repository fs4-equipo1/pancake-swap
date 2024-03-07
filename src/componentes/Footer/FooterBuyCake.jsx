import styles from "./FooterBuyCake.module.scss";
import Boton from "../Boton/Boton";
import useCoinPrice from "../CustomHooks/useCoinPrice";
import { useTranslation } from "react-i18next";
import pancakeIcon from "../../../public/assets/PancakeSwapIcon.png"

export function FooterBuyCake() {
  const { price } = useCoinPrice();
  const { t } = useTranslation();
  return (
    <div>    
    <div className={styles.footerBuyCake}>
      <div className={styles.logoPrice}>
      <img
        src={pancakeIcon}
        alt="Blue Circle Icon"
        className={styles.bluecircleImage}
        width="28"
        height="28"
        style={{ marginRight: "10px" }}
      />
      <p style={{ marginRight: "20px", color: "#B8ADD2" }}>{`$${price}`}</p>
      </div>
      <div>
        <Boton texto={t("BuyCAKE")} isBlue={true} />
        
      </div>
      
    </div>
    </div>
    
  );
}
