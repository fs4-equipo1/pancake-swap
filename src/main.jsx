import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App.jsx";
import { StoreProvider } from "easy-peasy";
import { store } from "./store/index.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>
);
