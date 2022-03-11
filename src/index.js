import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import { OptionsContextProvider } from "./store/options-context";

ReactDOM.render(
  <OptionsContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </OptionsContextProvider>,
  document.getElementById("root")
);
