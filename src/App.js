import React, { useState } from "react";
import "./App.css";

import bgm from "./components/bgm/bgm";

import Header from "./components/header/Header";
import StartPage from "./components/start-page/StartPage";
import OptionPage from "./components/option-page/OptionPage";
import MainPage from "./components/main-page/MainPage";

function App() {
  const [numPlayer, setNumPlayer] = useState("");
  const [inputOptions, setInputOptions] = useState({});
  const [start, setStart] = useState(false);
  const [musicOff, setMusicOff] = useState(false);

  const savePlayerNumHandler = (num) => {
    setNumPlayer(num);
  };

  const saveOptionsHandler = (optionObj) => {
    setInputOptions({ ...optionObj });
    setStart(true);
  };

  console.log(inputOptions);

  const toggleSoundHandler = (musicOff) => {
    setMusicOff(musicOff);
  };

  return (
    <div className="app">
      <Header
        title="The Ladder Game"
        numPlayer={numPlayer && `${numPlayer} people playing`}
        onToggleSound={toggleSoundHandler}
      />
      {!numPlayer && (
        <StartPage onSavePlayerNum={savePlayerNumHandler} musicOff={musicOff} />
      )}
      {numPlayer > 1 && !start && (
        <OptionPage
          className="input"
          numPlayer={numPlayer}
          onSaveOptions={saveOptionsHandler}
        />
      )}
      {start && <MainPage numPlayer={numPlayer} inputResults={inputOptions} />}
    </div>
  );
}

export default App;
