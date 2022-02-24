import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import StartPage from "./components/StartPage";
import OptionPage from "./components/OptionPage";
import MainPage from "./components/main-page/MainPage";

function App() {
  const [numPlayer, setNumPlayer] = useState("");
  const [inputOptions, setInputOptions] = useState({});
  const [start, setStart] = useState(false);

  const savePlayerNumHandler = (num) => {
    setNumPlayer(num);
  };

  const saveOptionsHandler = (optionObj) => {
    setInputOptions({ ...optionObj });
    setStart(true);
  };

  console.log(inputOptions);

  return (
    <div className="app">
      <Header
        title="The Ladder Game"
        numPlayer={numPlayer && `${numPlayer} people playing`}
      />
      {!numPlayer && <StartPage onSavePlayerNum={savePlayerNumHandler} />}
      {numPlayer > 1 && !start && (
        <OptionPage
          className="input"
          numPlayer={numPlayer}
          onSaveOptions={saveOptionsHandler}
        />
      )}
      {start && <MainPage numPlayer={numPlayer} />}
    </div>
  );
}

export default App;
