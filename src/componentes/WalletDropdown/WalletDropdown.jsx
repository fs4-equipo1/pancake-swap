import { useState } from "react";
import styles from "./WalletDropdown.module.scss";
import { FaArrowRightFromBracket, FaChevronDown } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const WalletDropdown = ({ user, disconnectHandler }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const { t, i18n } = useTranslation();

  const itemsWalletDropdown = [
    {
      texto: t("Wallet"),
      icono: <null />,
    },
    {
      texto: t("Recent Transaccions"),
      icono: <null />,
    },
    {
      texto: t("Your NFTs"),
      icono: <null />,
    },
    {
      texto: t("Make a Profile"),
      icono: <null />,
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
        {/* <span className={styles.walletIcon}>""</span> */}
        <span className={styles.user}>{user}</span>
        <span className={styles.arrowDown}><FaChevronDown /></span>
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
    </div>
  );
};

export default WalletDropdown;
