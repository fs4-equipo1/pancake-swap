import Boton from "../Boton/Boton";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import NetworkDropdown from "../NetworkDropdown/NetworkDropdown";
import NavbarDropdown from "../NavbarDropdown/NavbarDropdown";
import { Icono } from "../Icono/Icono";
import { IoMdSettings } from "react-icons/io";
import styles from "./Navbar.module.scss";
import { FaArrowRightFromBracket } from "react-icons/fa6";

function Navbar() {
  /**
   * EJEMPLO PARA RAMIRO
   */

  const items = [
    {
      texto: "Perpetual",
      icono: <FaArrowRightFromBracket />,
    },
    {
      texto: "Bridge",
      icono: <FaArrowRightFromBracket />,
    },
    {
      texto: "Gaming Marketplace",
      icono: <FaArrowRightFromBracket />,
    },
    {
      texto: "Blog",
      icono: <FaArrowRightFromBracket />,
    },
    {
      texto: "Docs",
      icono: <FaArrowRightFromBracket />,
    },
  ];
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.dropdownPrimary}>
          <img
            className={styles.navbarImg}
            src="https://cdn.discordapp.com/attachments/1146380288776220734/1186038041333207050/vecake-title.de07d9b9.png?ex=6591cb00&is=657f5600&hm=28843fe8c1fb35f0112536f74a1ae45023861dff72317cf761797d8e043cb597&"
          ></img>
          <NavbarDropdown
            title={"Trade"}
            items={[
              "Swap",
              "Liquidity",
              "Perpetual",
              "Bridge",
              "Limit (V2)",
              "Buy Crypto",
              "Trading Reward",
            ]}
          />
          <NavbarDropdown
            title={"Earn"}
            items={[
              "Farms",
              "Cake staking",
              "Pools",
              "Position Manager",
              "Liquid Staking",
              "Simple Staking",
            ]}
            punto={"success"}
          />
          <NavbarDropdown
            title={"Game"}
            items={[
              "Gaming Marketplace",
              "Prediction BETA",
              "Lottery",
              "Pottery BETA",
            ]}
          />
          <NavbarDropdown
            title={"NFT"}
            items={["Overview", "Collections", "Activity"]}
          />
          <NavbarDropdown
            title={"..."}
            items={[
              "info",
              "IFO",
              "Affiliate Program",
              "Voting",
              <hr />,
              "Leanderboard",
              <hr />,
              "Blog",
              "Docs",
            ]}
            punto={"success"}
          />

          {/**
           * CONTINUACION DEL EJEMPLO
           */}
          {/* <NavbarDropdown
            title={"Earn"}
            items={items}
            punto={"gold"}
          /> */}
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
          <LanguageDropdown />
          <Icono
            icono={<IoMdSettings />}
            href="https://www.instagram.com/pancakeswap_official"
          />
          <NetworkDropdown />
          <Boton texto={"Connect Wallet"} isBlue={true} />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;