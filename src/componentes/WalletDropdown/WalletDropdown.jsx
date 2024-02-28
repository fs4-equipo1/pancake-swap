import React, { useState } from "react";
import styles from "./WalletDropdown.module.scss";
import { FaArrowRightFromBracket, FaChevronDown } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { WalletIcon } from "../../../Assets/Icons/WalletIcon";
import { WarningIcon } from "../../../Assets/Icons/WarningIcon";
import { GoDotFill, GoTypography } from "react-icons/go";
import { useWallet } from "../../context/WalletContext";
import { useActiveNetwork } from "../../context/ActiveNetworkContext";
import Tipografia from "../Tipografia/Tipografia";
import { useAccount, useBalance } from "wagmi";

const WalletDropdown = ({ user, disconnectHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBalanceModal, setShowBalanceModal] = useState(false);

  const { address } = useAccount();
  const { activeNetwork, updateActiveNetwork } = useActiveNetwork();
  const balance = useBalance({
    address: address,
    chainId: activeNetwork.chainId,
  });

  // console.log(balance?.data?.formatted, balance?.data?.symbol)

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleWalletClick = () => {
    setShowBalanceModal(true);
  };

  const handleCloseModal = () => {
    setShowBalanceModal(false);
  };

  const { t, i18n } = useTranslation();

  const itemsWalletDropdown = [
    {
      texto: t("Wallet"),
      icono: !address ? <WarningIcon className={styles.warning} /> : null,
      onClick: handleWalletClick,
    },
    {
      texto: t("Recent Transaccions"),
      icono: null,
    },
    {
      texto: t("Your NFTs"),
      icono: null,
    },
    {
      texto: t("Make a Profile"),
      icono: <GoDotFill className={styles.redDot} />,
    },
    {
      texto: t("Disconnect"),
      icono: <FaArrowRightFromBracket />,
      onClick: disconnectHandler,
    },
  ];

  return (
    <div
      className={styles.walletConnected}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.dropdownBtn}>
        <span className={styles.walletIcon}>
          <WalletIcon fill="var(--colors-primary)" />
        </span>
        <span className={styles.user}>{user}</span>
        <span className={styles.arrowDown}>
          <FaChevronDown />
        </span>
      </div>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {itemsWalletDropdown &&
            itemsWalletDropdown.map((item, index) => (
              <a
                href="#"
                onClick={item.onClick}
                key={index}
                className={styles.dropdownItem}
              >
                <span className={styles.text}>{item.texto}</span>
                {item.icono && (
                  <span className={styles.itemIcon}>{item.icono}</span>
                )}
              </a>
            ))}
        </div>
      )}
      {showBalanceModal && (
        <div className={styles.modalContainer}>
          <div className={styles.theModal}>
            <div className={styles.modalTitle}>
              <Tipografia color={"--colors-primary"} isTitle texto={t("Wallet")} />
              <button className={styles.modalClose} onClick={handleCloseModal}>
                <svg viewBox="0 0 24 24" className={styles.closeSVG}>
                  <path d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"></path>
                </svg>
              </button>
            </div>
            <div className={styles.modalContent}>
              <div className={styles.walletAddress}>
                <Tipografia color={"--colors-text"} texto={t("YourAddress")} />
                <div className={styles.addressBox}>
                  <Tipografia
                    color={"--colors-silver"}
                    texto={address ? address : t("NoWalletConnected")}
                  />
                  <div className={styles.svgContainer}>
                    <svg>
                      <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                      <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className={styles.activeNetworkCont}>
                <div className={styles.activeNetworkContL}>
                  <Tipografia
                    color={"--colors-primary"}
                    isSubtitle
                    texto={t("CurrentNetwork")}
                  />
                  <Tipografia
                    color={"--colors-text"}
                    isTitle
                    texto={activeNetwork.chainName}
                  />
                  <br />
                  <Tipografia
                    color={"--colors-text99"}
                    isSubtitle
                    texto={`(${activeNetwork?.nativeCurrency.symbol})`}
                  />
                </div>
                <div className={styles.activeNetworkContR}>
                  <div className={styles.imageContainer}>
                    <img
                      src={activeNetwork.iconUrls[0]}
                      alt={activeNetwork.chainName}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.balanceCont}>
                <div className={styles.balanceTitle}>
                  <Tipografia
                    isSubtitle
                    color={"--colors-primary"}
                    texto={t("YourBalanceOF")}
                  />
                  <Tipografia
                    isSubtitle
                    color={"--colors-secondary"}
                    texto={activeNetwork.chainName}
                  />
                </div>
                <Tipografia
                  color={"--colors-text99"}
                  isSubtitleLarge
                  texto={
                    address
                      ? `${balance?.data?.formatted} ${activeNetwork?.nativeCurrency.symbol}`
                      : "No wallet connected"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletDropdown;
