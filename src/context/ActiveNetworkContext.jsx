import React, { createContext, useContext, useState, useEffect } from "react";

const ActiveNetworkContext = createContext();

export const ActiveNetworkProvider = ({ children }) => {
  const [activeNetwork, setActiveNetwork] = useState({
    chainId: "0x38",
    chainName: "BNB Chain",
    iconUrls: ["https://assets.pancakeswap.finance/web/chains/56.png"],
    rpcUrls: ["https://bsc-dataseed.binance.org/"],
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18,
    },
    blockExplorerUrls: ["https://bscscan.com/"],
  });

  const updateActiveNetwork = (network) => {
    setActiveNetwork({
      ...activeNetwork,
      ...network,
    });
    // console.log("Información de la red activa actualizada:", network);
  };

  return (
    <ActiveNetworkContext.Provider
      value={{ activeNetwork, updateActiveNetwork }}
    >
      {children}
    </ActiveNetworkContext.Provider>
  );
};

export const useActiveNetwork = () => {
  const context = useContext(ActiveNetworkContext);
  if (!context) {
    throw new Error(
      "useActiveNetwork debe ser usado dentro de un ActiveNetworkProvider"
    );
  }
  return context;
};
