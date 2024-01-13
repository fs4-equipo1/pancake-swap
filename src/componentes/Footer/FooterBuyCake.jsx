import styles from "./FooterBuyCake.module.scss";
import Boton from "../Boton/Boton";
import CoinPrice from "../CustomHooks/CoinPrice";

export function FooterBuyCake() {
  const cakePrice = CoinPrice()[0];
  return (
    <div className={styles.footerBuyCake}>
      <img
        src="https://cdn.discordapp.com/attachments/1185220628794593330/1186043627458277518/bluecircleicon.ico?ex=6591d034&is=657f5b34&hm=2286b225c46783a62484255d51c01670db25ee68e9ee9210e5ce883a89f81835&"
        alt="Blue Circle Icon"
        className={styles.bluecircleImage}
        width="28"
        height="28"
        style={{ marginRight: "10px" }}
      />
      <p style={{ marginRight: "20px", color: "#B8ADD2" }}>{`$${cakePrice}`}</p>
      <div>
        <Boton texto={"Buy CAKE"} isBlue={true} />
      </div>
    </div>
  );
}
