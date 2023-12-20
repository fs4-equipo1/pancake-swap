import Boton from "../Boton/Boton";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import NetworkDropdown from "../NetworkDropdown/NetworkDropdown";
import NavbarDropdown from "../NavbarDropdown/NavbarDropdown";
import { Icono } from "../Icono/Icono";
import { IoMdSettings } from "react-icons/io";
import styles from "./Navbar.module.scss";
import { FaArrowRightFromBracket } from "react-icons/fa6";

function Navbar() {
  const itemsTrade = [
    {
      texto: "Swap",
      icono: <null />,
    },
    {
      texto: "Liquidity",
      icono: <null />,
    },
    {
      texto: "Perpetual",
      icono: <FaArrowRightFromBracket />,
    },
    {
      texto: "Bridge",
      icono: <FaArrowRightFromBracket />,
    },
    {
      texto: "Limit (V2)",
      icono: <null />,
    },
    {
      texto: "Buy Crypto",
      icono: <null />,
    },
    {
      texto: "Trading Reward",
      icono: <null />,
    },
  ];
  const itemsEarn = [
    {
      texto: "Farms",
      icono: <null />,
    },
    {
      texto: "CAKE Staking",
      icono: <null />,
    },
    {
      texto: "Pools",
      icono: <null />,
    },
    {
      texto: "Position Manager",
      icono: <null />,
    },
    {
      texto: "Liquid Staking",
      icono: <null />,
    },
    {
      texto: "Simple Staking",
      icono: <null />,
    },
  ];
  const itemsGame = [
    {
      texto: "Gaming Marketplace",
      icono: <FaArrowRightFromBracket />,
    },
    {
      texto: "Prediction (BETA)",
      icono: <null />,
    },
    {
      texto: "Lottery",
      icono: <null />,
    },
    {
      texto: "Pottery (BETA)",
      icono: <null />,
    },
  ];
  const itemsNft = [
    {
      texto: "Overview",
      icono: <null />,
    },
    {
      texto: "Colecctions",
      icono: <null />,
    },
    {
      texto: "Activity",
      icono: <null />,
    },
  ];

  const itemsPunto = [
    {
      texto: "Info",
      icono: <null />,
    },
    {
      texto: "IFO",
      icono: <null />,
    },
    {
      texto: "Affiliate Program",
      icono: <null />,
    },
    {
      texto: "Voting",
      icono: <null />,
    },
    {
      texto: "LeaderBoard",
      icono: <null />,
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
          <NavbarDropdown title={"Trade"} items={itemsTrade} />
          <NavbarDropdown title={"Earn"} items={itemsEarn} punto={"success"} />
          <NavbarDropdown title={"Game"} items={itemsGame} />
          <NavbarDropdown title={"NFT"} items={itemsNft} />
          <NavbarDropdown title={"..."} items={itemsPunto} />
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
