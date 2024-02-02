import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App.jsx";

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { StoreProvider } from "easy-peasy";
import { store } from "./store/index.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

// Replace this project ID with yours
// from cloud.walletconnect.com
const projectId = "00bb94f3fa13a355e8279fcc7ac5abb6";

const chains = [mainnet];

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
  featuredWalletIds: [
    "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
    "ecc4036f814562b41a5268adc86270fba1365471402006302e70169465b7ac18",
  ],
  excludeWalletIds: [
    "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
  ],
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider>
        <WagmiConfig config={wagmiConfig}>
          <App />
        </WagmiConfig>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>
);
