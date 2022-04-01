import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";
import StartPage from "./pages/start-page/StartPage";
import OptionPage from "./pages/option-page/OptionPage";
import MainPage from "./pages/main-page/MainPage";
import ResultPage from "./pages/result-page/ResultPage";

function App() {
  const [musicOff, setMusicOff] = useState(false);

  const numPlayer = JSON.parse(localStorage.getItem("playerNum"));

  const toggleSoundHandler = (musicOff) => {
    setMusicOff(musicOff);
  };

  return (
    <Router>
      <div className="app">
        <Header
          title="The Ladder Game"
          numPlayerInfo={numPlayer && `${numPlayer} people playing`}
          onToggleSound={toggleSoundHandler}
        />
        <Switch>
          <Route exact path="/">
            <StartPage musicOff={musicOff} />
          </Route>

          <Route path="/option">
            <OptionPage className="input" numPlayer={numPlayer} />
          </Route>
          <Route path="/main" component={MainPage} />
          <Route path="/result" component={ResultPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
