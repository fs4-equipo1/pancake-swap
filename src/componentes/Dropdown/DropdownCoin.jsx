import React, { useState } from 'react';
import styles from './DropdownCoin.module.scss';

const DropdownCoin = () => {
  const [activeButton, setActiveButton] = useState({ label: 'BNB Smart Chain', image: 'https://assets.pancakeswap.finance/web/chains/56.png' });

  const buttons = [
    { label: 'BNB Smart Chain', image: 'https://assets.pancakeswap.finance/web/chains/56.png' },
    { label: 'Ethereum', image: 'https://assets.pancakeswap.finance/web/chains/59144.png' },
    { label: 'Polygon zkEVM', image: 'https://assets.pancakeswap.finance/web/chains/1101.png' },
    { label: 'zkSync Era', image: 'https://assets.pancakeswap.finance/web/chains/324.png' },
    { label: 'Arbitrum One', image: 'https://assets.pancakeswap.finance/web/chains/42161.png' },
    { label: 'Linea Mainnet', image: 'https://assets.pancakeswap.finance/web/chains/59144.png' },
    { label: 'Base', image: 'https://assets.pancakeswap.finance/web/chains/8453.png' },
    { label: 'opBNB', image: 'https://assets.pancakeswap.finance/web/chains/56.png' },
    { label: 'Aptos', image: 'https://aptos.pancakeswap.finance/images/apt.png' },
  ];

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className={styles.dropdownCoinContainer}>
      <div className={styles.activeButton}>
        <img src={activeButton.image} alt={activeButton.label} className={styles.buttonImage} />
        <button>
          {activeButton.label}
        </button>
      </div>
      <div className={styles.dropdownCoinContent}>
        <p>Select a Network</p>
        <hr></hr>
        {buttons.map((button) => (
          <div key={button.label} className={styles.buttonWithImage}>
            <img src={button.image} alt={button.label} className={styles.buttonImage} />
            <button
              onClick={() => handleButtonClick(button)}
              className={activeButton.label === button.label ? styles.active : ''}
            >
              {button.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownCoin;