import React, { useState } from "react";
import styles from "./NetworkDropdown.module.scss";
import { networkData } from "./NetworksData";
const NetworkDropdown = () => {
  const [activeNetwork, setActiveNetwork] = useState({
    label: "BNB Smart Chain",
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
