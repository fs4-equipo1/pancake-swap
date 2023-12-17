import Boton from "../Boton/Boton";
import DropdownEnd from "./DropdownEnd";
import DropdownButton from "./DropdownButton";
import DropdownCoin from "./DropdownCoin";
import DropdownEarn from "./DropdownEarn";
import DropdownGame from "./DropdownGame";
import DropdownNft from "./DropdownNft";
import DropdownTrade from "./DropdownTrade";
import { Icono } from "../Icono/Icono";
import { IoMdSettings } from "react-icons/io";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.dropdownPrimary}>
          <img
            className={styles.navbarImg}
            src="https://cdn.discordapp.com/attachments/1146380288776220734/1186038041333207050/vecake-title.de07d9b9.png?ex=6591cb00&is=657f5600&hm=28843fe8c1fb35f0112536f74a1ae45023861dff72317cf761797d8e043cb597&"
          ></img>
          <DropdownTrade />
          <DropdownEarn />
          <DropdownGame />
          <DropdownNft />
          <DropdownEnd />
        </div>
        <div className={styles.dropdownSecondary}>
          <div className={styles.bluecircle}>
            <img
              src="https://cdn.discordapp.com/attachments/1185220628794593330/1186043627458277518/bluecircleicon.ico?ex=6591d034&is=657f5b34&hm=2286b225c46783a62484255d51c01670db25ee68e9ee9210e5ce883a89f81835&"
              alt="Blue Circle Icon"
              className={styles.bluecircleImage}
            />
            <p>$2.273</p>
          </div>
          <DropdownButton />
          <Icono
            icono={<IoMdSettings />}
            href="https://www.instagram.com/pancakeswap_official"
          />
          <DropdownCoin />
          <Boton texto={"Connect Wallet"} isBlue={true} />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
