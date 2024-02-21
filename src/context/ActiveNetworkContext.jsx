import React, { createContext, useContext, useState } from "react";

const ActiveNetworkContext = createContext();

export const ActiveNetworkProvider = ({ children }) => {
  const [activeNetwork, setActiveNetwork] = useState({
    label: "BNB Chain",
    image: "https://assets.pancakeswap.finance/web/chains/56.png",
    selectedCurrency: "BNB",
  });

  const updateActiveNetwork = (network) => {
    setActiveNetwork(network);
    console.log("Información de la red activa actualizada:", network);
  };

  return (
    <ActiveNetworkContext.Provider value={{ activeNetwork, updateActiveNetwork }}>
      {children}
    </ActiveNetworkContext.Provider>
  );
};

export const useActiveNetwork = () => {
  const context = useContext(ActiveNetworkContext);
  if (!context) {
    throw new Error("useActiveNetwork debe ser usado dentro de un ActiveNetworkProvider");
  }
  return context;
};
