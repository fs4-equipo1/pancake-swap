import React from "react";
import styles from "./NetworkDropdown.module.scss";
import { networkData } from "./NetworksData";
import { networkJSON } from "./NetworkJSON";
import { useTranslation } from "react-i18next";
import { useActiveNetwork } from "../../context/ActiveNetworkContext";
import { useSwitchNetwork } from "wagmi";

const NetworkDropdown = () => {
  const { activeNetwork, updateActiveNetwork } = useActiveNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();

    const isNetworkAlreadyAdded = async (network) => {
      try {
        const accounts = await ethereum.request({
          method: 'eth_accounts'
        });
    
        const activeChainId = accounts.length > 0 ? await ethereum.request({
          method: 'eth_chainId'
        }) : null;
    
        return activeChainId === network.chainId;
      } catch (error) {
        console.error('Error al verificar la red en MetaMask:', error);
        return false;
      }
    };

  const addNetworkToMetamask = async (network) => {
    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [network],
      });
      console.log(`Red ${network.label} agregada a Metamask.`);
    } catch (error) {
      console.error("Error al agregar la red a Metamask:", error);
    }
  };

  const handleButtonClick = async (network) => {
    console.log(network);
    try {
      const isNetworkAdded = await isNetworkAlreadyAdded(network);
      if (!isNetworkAdded) {
        await addNetworkToMetamask(network);
      }
      await switchNetwork?.(network);
      await updateActiveNetwork(network);
    } catch {
      console.log("Ha habido un error al añadir la billetera.");
    }
  };

  const { t } = useTranslation();

  return (
    <div className={styles.dropdownCoinContainer}>
      <div className={styles.activeNetwork}>
        <img
          src={activeNetwork.iconUrls}
          alt={activeNetwork.chainName}
          className={styles.buttonImage}
        />
        <button>{activeNetwork.chainName}</button>
        <DropdownArrow />
      </div>

      <div className={styles.dropdownCoinContent}>
        <p>{t("SelectaNetwork")}</p>
        <hr></hr>
        {networkJSON.map((network) => (
          <button
            onClick={() => handleButtonClick(network)}
            key={network.jsonID}
            className={styles.buttonWithImage}
          >
            <img
              src={network.iconUrls[0]}
              alt={network.chainName}
              className={styles.buttonImage}
            />
            <div
              className={
                activeNetwork.chainName === network.chainName
                  ? styles.active
                  : ""
              }
            >
              {network.chainName}
            </div>
          </button>
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
