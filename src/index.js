import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import { OptionsContextProvider } from "./store/options-context";
import { MusicContextProvider } from "./store/music_play-context";
import { LadderContextProvider } from "./store/ladder-context";

ReactDOM.render(
  <LadderContextProvider>
    <OptionsContextProvider>
      <MusicContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </MusicContextProvider>
    </OptionsContextProvider>
  </LadderContextProvider>,
  document.getElementById("root")
);
