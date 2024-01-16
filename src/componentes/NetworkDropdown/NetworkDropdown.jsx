import React, { useState } from "react";
import styles from "./NetworkDropdown.module.scss";
import { networkData } from "./NetworksData";

const NetworkDropdown = () => {
  const [activeNetwork, setActiveNetwork] = useState({
    label: "BNB Chain",
    image: "https://assets.pancakeswap.finance/web/chains/56.png",
  });

  const handleButtonClick = (network) => {
    setActiveNetwork(network);
  };

  return (
    <div className={styles.dropdownCoinContainer}>
      <div className={styles.activeNetwork}>
        <img
          src={activeNetwork.image}
          alt={activeNetwork.label}
          className={styles.buttonImage}
        />
        <button>{activeNetwork.label}</button>
        <DropdownArrow />
      </div>

      <div className={styles.dropdownCoinContent}>
        <p>Select a Network</p>
        <hr></hr>
        {networkData.map((network) => (
          <div key={network.label} className={styles.buttonWithImage}>
            <img
              src={network.image}
              alt={network.label}
              className={styles.buttonImage}
            />
            <button
              onClick={() => handleButtonClick(network)}
              className={
                activeNetwork.label === network.label ? styles.active : ""
              }
            >
              {network.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetworkDropdown;

function DropdownArrow() {
  return (
    <div className={styles.DropdownArrowSVGContainer}>
      <svg className={styles.DropdownArrowSVG} viewBox="0 0 24 24">
        <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
      </svg>
    </div>
  );
}
