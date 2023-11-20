import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./contexts/modalContext";
import { ScreenContextProvider } from "./contexts/screenContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <ScreenContextProvider>
          <App />
        </ScreenContextProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
