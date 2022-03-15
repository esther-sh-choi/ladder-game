import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import { OptionsContextProvider } from "./store/options-context";
import { MusicContextProvider } from "./store/music_play-context";

ReactDOM.render(
  <OptionsContextProvider>
    <MusicContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MusicContextProvider>
  </OptionsContextProvider>,
  document.getElementById("root")
);
