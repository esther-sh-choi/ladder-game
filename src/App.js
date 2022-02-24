import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import StartPage from "./components/StartPage";
import OptionPage from "./components/OptionPage";

function App() {
  const [numPlayer, setNumPlayer] = useState("");
  const [inputOptions, setInputOptions] = useState({});
  // const [start, setStart] = useState(false);

  const savePlayerNumHandler = (num) => {
    setNumPlayer(num);
  };

  const saveOptionsHandler = (optionObj) => {
    setInputOptions({ ...optionObj });
  };

  console.log(inputOptions);
  // if (Object.keys(inputOptions).length > 0) {
  //   setStart(true);
  // }

  return (
    <div className="app">
      <Header
        title="The Ladder Game"
        numPlayer={numPlayer && `${numPlayer} people playing`}
      />
      {!numPlayer && <StartPage onSavePlayerNum={savePlayerNumHandler} />}
      {numPlayer > 1 && (
        <OptionPage
          className="input"
          numPlayer={numPlayer}
          onSaveOptions={saveOptionsHandler}
        />
      )}
    </div>
  );
}

export default App;
