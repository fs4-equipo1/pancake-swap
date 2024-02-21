import React, { useState } from "react";
import styles from "./WalletDropdown.module.scss";
import { FaArrowRightFromBracket, FaChevronDown } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { WalletIcon } from "../../../Assets/Icons/WalletIcon";
import { WarningIcon } from "../../../Assets/Icons/WarningIcon";
import { GoDotFill } from "react-icons/go";
import { useWallet } from "../../context/WalletContext";
import { useActiveNetwork } from "../../context/ActiveNetworkContext";

const WalletDropdown = ({ user, disconnectHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBalanceModal, setShowBalanceModal] = useState(false);
  const { wallet } = useWallet();
  const { activeNetwork } = useActiveNetwork(); 
  const selectedCurrency = activeNetwork.selectedCurrency;

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
      icono: <WarningIcon className={styles.warning} />,
      onClick: handleWalletClick,
    },
    {
      texto: t("Recent Transaccions"),
      icono: null
    },
    {
      texto: t("Your NFTs"),
      icono: null
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
        <div className={styles.modalBackdrop} onClick={handleCloseModal}>
          <div className={styles.modal}>
            <h2>Balance</h2>
            <h5>{activeNetwork.label}</h5>
            <p>{wallet ? wallet.balance : "No se ha conectado ninguna billetera"}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletDropdown;
