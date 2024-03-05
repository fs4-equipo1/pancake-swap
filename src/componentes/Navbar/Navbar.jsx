import { useState, useEffect } from "react";
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
import { useWeb3Modal, useWeb3ModalEvents } from "@web3modal/wagmi/react";
import useCoinPrice from "../CustomHooks/useCoinPrice";
import { useStoreState, useStoreActions } from "../../store";
import React from "react";
import { useTranslation } from "react-i18next";
import { useAccount, useDisconnect, useFeeData } from "wagmi";
import classNames from "classnames/bind";
import WalletDropdown from "../WalletDropdown/WalletDropdown";
import useAddress from "../WalletConnect/useAddress";
import pancakeIcon from "../../../public/assets/PancakeSwapIcon.png"
const cx = classNames.bind();

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState(
    window.innerWidth <= 800 ? t("Connect") : t("ConnectWallet")
  );

  useEffect(() => {
    const handleResize = () => {
      setButtonText(
        window.innerWidth <= 800 ? t("Connect") : t("ConnectWallet")
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [t]);

  const className = cx({
    es: i18n.language === "es",
    en: i18n.language === "en",
  });

  console.log("Const Classname:", className);

  const itemsTrade = [
    {
      texto: t("Swap"),
      icono: <null />,
    },
    {
      texto: t("Liquidity"),
      icono: <null />,
    },
    {
      texto: t("Perpetual"),
      icono: <FaArrowRightFromBracket />,
    },
    {
      texto: t("Bridge"),
      icono: <FaArrowRightFromBracket />,
    },
    {
      texto: t("Limit"),
      icono: <null />,
    },
    {
      texto: t("BuyCrypto"),
      icono: <null />,
    },
    {
      texto: t("TradingReward"),
      icono: <null />,
    },
  ];
  const itemsEarn = [
    {
      texto: t("Farms"),
      icono: <null />,
    },
    {
      texto: t("CAKEStaking"),
      icono: <null />,
    },
    {
      texto: t("Pools"),
      icono: <null />,
    },
    {
      texto: t("PositionManager"),
      icono: <null />,
    },
    {
      texto: t("LiquidStaking"),
      icono: <null />,
    },
    {
      texto: t("SimpleStaking"),
      icono: <null />,
    },
  ];
  const itemsGame = [
    {
      texto: t("GamingMarketplace"),
      icono: <FaArrowRightFromBracket />,
    },
    {
      texto: t("Prediction(BETA)"),
      icono: <null />,
    },
    {
      texto: t("Lottery"),
      icono: <null />,
    },
    {
      texto: t("Pottery(BETA)"),
      icono: <null />,
    },
  ];
  const itemsNft = [
    {
      texto: t("Overview"),
      icono: <null />,
    },
    {
      texto: t("Colecctions"),
      icono: <null />,
    },
    {
      texto: t("Activity"),
      icono: <null />,
    },
  ];

  const itemsPunto = [
    {
      texto: t("Info"),
      icono: <null />,
    },
    {
      texto: t("IFO"),
      icono: <null />,
    },
    {
      texto: t("AffiliateProgram"),
      icono: <null />,
    },
    {
      texto: t("Voting"),
      icono: <null />,
    },
    {
      texto: t("LeaderBoard"),
      icono: <null />,
    },
    {
      texto: t("Blog"),
      icono: <FaArrowRightFromBracket />,
    },
  ];

  const { price } = useCoinPrice();

  const { open, selectedNetworkId } = useWeb3Modal();
  const { disconnect } = useDisconnect();

  const { isDisconnected } = useAccount();

  const { address, formatAddress } = useAddress();

  useEffect(() => {
    console.log(selectedNetworkId, "seleceted id");
  }, [selectedNetworkId]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.dropdownPrimary}>
        <Logo />
        <NavbarDropdown title={t("Trade")} items={itemsTrade} />
        <NavbarDropdown title={t("Earn")} items={itemsEarn} punto={"success"} />
        <NavbarDropdown title={t("Game")} items={itemsGame} />
        <NavbarDropdown title={t("NFT")} items={itemsNft} />
        <NavbarDropdown title={"···"} items={itemsPunto} />
      </div>
      <div className={styles.dropdownSecondary}>
        <div className={styles.blueCircle}>
          <a
            className={styles.blueCircleLink}
            href={"https://www.coingecko.com/en/coins/pancakeswap"}
          >
            {`$${price}`}
            {
              <div className={styles.bluecircleImage}>
                <img src={pancakeIcon} alt="Cake Icon" width="25px" />
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
              <SettingsModal closeModal={() => setIsSettingsModalOpen(false)} />
            </Modal>
          )}
        </div>

        <NetworkDropdown />

        {isDisconnected && (
          <Boton
            isConnectWallet
            onClick={() => open({ view: "Connect" })}
            texto={buttonText}
            isBlue={true}
          />
        )}
        {!isDisconnected && (
          <WalletDropdown
            user={`${formatAddress(address)}`}
            disconnectHandler={() => disconnect()}
          />
        )}
      </div>
    </nav>
  );
}

const SettingsModal = ({ closeModal }) => {
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
            <ThemeToggle />
            <ToggleSwitch />
            <ToggleSwitch />
            <ToggleSwitch />
            <ToggleSwitch />
          </div>
        </div>
        <div className={settingsStyles.modalBottom}>
          <Tipografia texto={"Default Transaction Speed (GWEI)"}></Tipografia>
          <div className={settingsStyles.buttons}>
            <Boton texto={"Default"} isBlue={true} isSmall={true}></Boton>
            <Boton texto={"Standard (3)"} isWhite={true} isSmall={true}></Boton>
            <Boton texto={"Fast (4)"} isWhite={true} isSmall={true}></Boton>
            <Boton texto={"Instant (5)"} isWhite={true} isSmall={true}></Boton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
