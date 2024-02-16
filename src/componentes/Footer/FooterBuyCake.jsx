import styles from "./FooterBuyCake.module.scss";
import Boton from "../Boton/Boton";
import useCoinPrice from "../CustomHooks/useCoinPrice";
import { useTranslation } from "react-i18next";

export function FooterBuyCake() {
  const { price } = useCoinPrice();
  const { t } = useTranslation();
  return (
    <div>    
    <div className={styles.footerBuyCake}>
      <div className={styles.logoPrice}>
      <img
        src="https://cdn.discordapp.com/attachments/1185220628794593330/1186043627458277518/bluecircleicon.ico?ex=6591d034&is=657f5b34&hm=2286b225c46783a62484255d51c01670db25ee68e9ee9210e5ce883a89f81835&"
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
