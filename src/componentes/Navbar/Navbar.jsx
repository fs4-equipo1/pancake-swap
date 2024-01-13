import React, { useState } from "react";
import Modal from "../Modal/Modal";
import settingsStyles from "../Modal/Settings.module.scss";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import NavbarDropdown from "../NavbarDropdown/NavbarDropdown";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import NetworkDropdown from "../NetworkDropdown/NetworkDropdown";
import Boton from "../Boton/Boton";
import styles from "./Navbar.module.scss";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Tipografia from "../Tipografia/Tipografia";
import { Icono } from "../Icono/Icono";
import { IoMdSettings } from "react-icons/io";
import IconoWrapper from "../IconoWraper/IconoWraper";
import ToggleSwitch from "../Activate/Activate";
import { Logo } from "../Logo/Logo";
import CoinPrice from "../CustomHooks/CoinPrice";

function Navbar({ theme, toggleTheme }) {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

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
  ];

  const cakePrice = CoinPrice()[0];

  return (
    <nav className={styles.navbar}>
      <div className={styles.dropdownPrimary}>
        <Logo />
        <NavbarDropdown title={"Trade"} items={itemsTrade} />
        <NavbarDropdown title={"Earn"} items={itemsEarn} punto={"success"} />
        <NavbarDropdown title={"Game"} items={itemsGame} />
        <NavbarDropdown title={"NFT"} items={itemsNft} />
        <NavbarDropdown title={"···"} items={itemsPunto} />
      </div>
      <div className={styles.dropdownSecondary}>
        <div className={styles.blueCircle}>
          <a className={styles.blueCircleLink }href={"https://www.coingecko.com/en/coins/pancakeswap"}>
            {`$${cakePrice}`}
            {
              <div className={styles.bluecircleImage}>
              <img
                src="https://cdn.discordapp.com/attachments/1185220628794593330/1186043627458277518/bluecircleicon.ico?ex=6591d034&is=657f5b34&hm=2286b225c46783a62484255d51c01670db25ee68e9ee9210e5ce883a89f81835&"
                alt="Cake Icon"
                width="25px"
              />
              </div>
            }
          </a>
        </div>
        <LanguageDropdown />
        <div>
          <IconoWrapper onClick={() => setIsSettingsModalOpen(true)}>
            <Icono icono={<IoMdSettings />} />
          </IconoWrapper>
          {isSettingsModalOpen && (
            <Modal onClose={() => setIsSettingsModalOpen(false)}>
              <SettingsModal
                closeModal={() => setIsSettingsModalOpen(false)}
                theme={theme}
                toggleTheme={toggleTheme}
              />
            </Modal>
          )}
        </div>

        <NetworkDropdown />
        <IconoWrapper onClick={() => setIsWalletModalOpen(true)}>
          <Boton texto={"Connect Wallet"} isBlue={true} />
        </IconoWrapper>

        {isWalletModalOpen && (
          <Modal onClose={() => setIsWalletModalOpen(false)}>
            <div>
              WALLET MODAL
              <button onClick={() => setIsWalletModalOpen(false)}>CLOSE</button>
            </div>
          </Modal>
        )}
      </div>
    </nav>
  );
}

const SettingsModal = ({ closeModal, theme, toggleTheme }) => {
  return (
    <>
      <div className={settingsStyles.header}>
        <Tipografia texto={"Settings"} isTitle></Tipografia>
        <button className={settingsStyles.close} onClick={closeModal}>
          <svg viewBox="0 0 24 24" className={settingsStyles.closeSVG}>
            <path d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"></path>
          </svg>
        </button>
      </div>
      <div>
        <Tipografia texto={"GLOBAL"} isBodyLarge></Tipografia>
        <div className={settingsStyles.modalTop}>
          <div className={settingsStyles.textContainer}>
            <Tipografia texto={"Dark mode"} isBodyLarge></Tipografia>
            <Tipografia
              texto={"Subgraph Health Indicator"}
              isBodyLarge
            ></Tipografia>
            <Tipografia texto={"Show username"} isBodyLarge></Tipografia>
            <Tipografia texto={"Allow notifications"} isBodyLarge></Tipografia>
            <Tipografia texto={"Token Risk Scanning"} isBodyLarge></Tipografia>
          </div>
          <div className={settingsStyles.activate}>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <ToggleSwitch />
            <ToggleSwitch />
            <ToggleSwitch />
            <ToggleSwitch />
          </div>
        </div>
        <div className={settingsStyles.modalBottom}>
          <Tipografia texto={"Default Transaction Speed (GWEI)"}></Tipografia>
          <div className={settingsStyles.buttons}>
            <Boton texto={"Default"} isBlue={true}></Boton>
            <Boton texto={"Standard (3)"} isWhite={true}></Boton>
            <Boton texto={"Fast (4)"} isWhite={true}></Boton>
            <Boton texto={"Instant (5)"} isWhite={true}></Boton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
