import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import bgm from "./components/bgm/bgm";

import Header from "./components/header/Header";
import StartPage from "./components/start-page/StartPage";
import OptionPage from "./components/option-page/OptionPage";
import MainPage from "./components/main-page/MainPage";

function App() {
  const [numPlayer, setNumPlayer] = useState("");
  const [start, setStart] = useState(false);
  const [musicOff, setMusicOff] = useState(false);

  const savePlayerNumHandler = (num) => {
    setNumPlayer(num);
  };

  const toggleSoundHandler = (musicOff) => {
    setMusicOff(musicOff);
  };

  return (
    <Router>
      <div className="app">
        <Header
          title="The Ladder Game"
          numPlayer={numPlayer && `${numPlayer} people playing`}
          onToggleSound={toggleSoundHandler}
        />
        <Switch>
          <Route exact path="/">
            {!numPlayer && (
              <StartPage
                onSavePlayerNum={savePlayerNumHandler}
                musicOff={musicOff}
              />
            )}
          </Route>
          {numPlayer > 1 && !start && (
            <Route path="/option">
              <OptionPage className="input" numPlayer={numPlayer} />
            </Route>
          )}
          <Route path="/main_game">
            <MainPage />
          </Route>
          )
        </Switch>
      </div>
    </Router>
  );
}

export default App;
