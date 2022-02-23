import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import StartPage from "./components/StartPage";
import OptionPage from "./components/OptionPage";

function App() {
  const [numPlayer, setNumPlayer] = useState("");

  const savePlayerNumHandler = (num) => {
    setNumPlayer(num);
  };

  return (
    <div className="app">
      <Header
        title="The Ladder Game"
        numPlayer={numPlayer && `${numPlayer} people playing`}
      />
      {!numPlayer && (
        <StartPage onSavePlayerNum={savePlayerNumHandler}></StartPage>
      )}
      {numPlayer > 1 && (
        <OptionPage className="input" numPlayer={numPlayer}></OptionPage>
      )}
    </div>
  );
}

export default App;
