import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import StartPage from "./pages/start-page/StartPage";
import OptionPage from "./pages/option-page/OptionPage";
import MainPage from "./pages/main-page/MainPage";
import ResultPage from "./pages/result-page/ResultPage";

import "./App.css";

function App() {
  const [musicOff, setMusicOff] = useState(false);

  const numPlayer = JSON.parse(localStorage.getItem("playerNum"));

  const toggleSoundHandler = (musicOff) => {
    setMusicOff(musicOff);
  };

  return (
    <div className="app">
      <Header
        title="The Ladder Game"
        numPlayerInfo={numPlayer && `${numPlayer} people playing`}
        onToggleSound={toggleSoundHandler}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage musicOff={musicOff} />} />
          <Route
            path="/option"
            element={<OptionPage className="input" numPlayer={numPlayer} />}
          />
          <Route path="/main" element={<MainPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
