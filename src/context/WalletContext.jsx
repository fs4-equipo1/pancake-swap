import React, { createContext, useState, useContext } from "react";
import { createWeb3Modal } from "@web3modal/wagmi/react";

export const WalletContext = createContext();

export const WalletContextProvider = ({ children }) => {
  const [wallet, setWallet] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null); 

  const connectWallet = async () => {
    try {
      const web3Modal = createWeb3Modal();
      const provider = await web3Modal.connect();
      setWallet(provider);
      
      if (provider && provider.selectedAddress) {
        setWalletAddress(provider.selectedAddress);
      }
    } catch (error) {
      console.error("Error al conectar la billetera:", error);
    }
  };

  const disconnectWallet = () => {
    if (wallet && wallet.close) {
      wallet.close();
      setWallet(null);
      setWalletAddress(null); 
    }
  };

  return (
    <WalletContext.Provider
      value={{
        wallet,
        walletAddress, 
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet debe ser usado dentro de un WalletContextProvider");
  }
  return context;
};
