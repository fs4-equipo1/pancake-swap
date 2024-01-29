import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App.jsx";
import { StoreProvider } from "easy-peasy";
import { store } from "./store/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
