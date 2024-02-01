import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App.jsx"

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet, zkSyncTestnet } from "wagmi/chains";

// Replace this project ID with yours
// from cloud.walletconnect.com
const projectId = "00bb94f3fa13a355e8279fcc7ac5abb6";

const chains = [mainnet, arbitrum, zkSyncTestnet];

const wagmiConfig = defaultWagmiConfig({
  projectId,
  chains,
  metadata: {
    name: "test",
  },
});

createWeb3Modal({
  chains,
  projectId,
  wagmiConfig,
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <App />
    </WagmiConfig>
  </React.StrictMode>
);
