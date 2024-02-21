import { useState } from "react";
import styles from "./DropdownFooter.module.scss";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const DropdownFooter = ({ title, itemsKey, punto, imageSrc }) => {
  const dropdownItems = {
    // icon: <img src="../public/assets/earn.png" alt="trade Icon" />,
    earn: [
      {
        texto: "Farms",
        icono: null,
      },
      {
        texto: "CAKE Staking",
        icono: null,
      },
      {
        texto: "Pools",
        icono: null,
      },
      {
        texto: "Position Manager",
        icono: null,
      },
      {
        texto: "Liquid Staking",
        icono: null,
      },
      {
        texto: "Simple Staking",
        icono: null,
      },
    ],
    
    game: [
      {
        texto: "Gaming Marketplace",
        icono: <FaArrowRightFromBracket />,
      },
      {
        texto: "Prediction (BETA)",
        icono: null,
      },
      {
        texto: "Lottery",
        icono: null,
      },
      {
        texto: "Pottery (BETA)",
        icono: null,
      },
    ],
    more: [
      {
        texto: "Info",
        icono: null,
      },
      {
        texto: "IFO",
        icono: null,
      },
      {
        texto: "Affiliate Program",
        icono: null,
      },
      {
        texto: "Voting",
        icono: null,
      },
      {
        texto: "Leaderboard",
        icono: null,
      },
      {
        texto: "Blog",
        icono: <FaArrowRightFromBracket />,
      },
      {
        texto: "Docs",
        icono: <FaArrowRightFromBracket />,
      },
    ],
    nft: [
      {
        texto: "Overview",
        icono: null,
      },
      {
        texto: "Collections",
        icono: null,
      },
      {
        texto: "Activity",
        icono: null,
      },
    ],
  };

  const [isOpen, setIsOpen] = useState(false);
  const items = dropdownItems[itemsKey]; 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleItemClick = () => {
    console.log("Item Clicked");
    closeDropdown();
  };

  return (
    <div className={styles.dropdownContainer}>
      <button className={styles.dropdownBtn} onClick={toggleDropdown}>
        {imageSrc && <img src={imageSrc} alt={`Image for ${title}`} className={styles.image} />}
        {title==='. . .' && <span className={styles.moreText}>{title}</span> || <span className={styles.title}>{title}</span>}
      </button>
    {punto && (
      <div
        className={styles.punto}
        style={{ backgroundColor: `var(--colors-${punto})` }}
      />
    )}
      {isOpen && (
        <div
          className={`${styles.dropdownContent} ${styles.dropdownContentUp}`}
        >
          {items &&
            items.map((item, index) => (
              <div
                key={index}
                className={styles.dropdownItem}
                onClick={handleItemClick}
              >
                <span className={styles.text}>{item.texto}</span>
                {item.icono && (
                  <span className={styles.icon}>{item.icono}</span>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default DropdownFooter;