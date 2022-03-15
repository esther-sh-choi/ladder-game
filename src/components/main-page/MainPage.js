import React, { useState, Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";

import PlayerIcon from "./PlayerIcon";
import Ladder from "./Ladder";
import ResultButtons from "./ResultButtons";
import ResultModal from "../UI/ResultModal";
import Button from "../UI/Button";
import OptionsContext from "../../store/options-context";

import styles from "./MainPage.module.css";

const MainPage = () => {
  const history = useHistory();
  const optionsCtx = useContext(OptionsContext);

  const [optionChosen, setOptionChosen] = useState("");
  const [letterChosen, setLetterChosen] = useState("");
  const [showResultModal, setShowResultModal] = useState(false);
  const [player, setPlayer] = useState("");

  console.log(optionsCtx.options);

  const showResultModalHandler = (letter) => {
    setOptionChosen(
      ...optionsCtx.options.filter((option) =>
        Object.keys(option).includes(letter)
      )
    );
    setLetterChosen(letter);
    setShowResultModal(true);
  };

  const closeModalHandler = () => {
    setShowResultModal(false);
  };

  const saveChosenPlayerHandler = (playerName) => {
    setPlayer(playerName);
  };

  const displayResultsHandler = () => {
    history.push("/result");
  };

  return (
    <Fragment>
      <div className={styles["main-page"]}>
        <PlayerIcon chosenPlayer={saveChosenPlayerHandler} />
        <div className={styles["vertical-ladder"]}>
          <Ladder player={player} />
        </div>
        <ResultButtons onGetChosenResult={showResultModalHandler} />
        <footer className={styles.main}>
          <Button
            className={styles.restartBtn}
            onClick={() => {
              history.push("/");
              window.location.reload(false);
            }}
          >
            RESTART
          </Button>
          <Button className={styles.resultBtn} onClick={displayResultsHandler}>
            RESULT
          </Button>
        </footer>
      </div>
      {showResultModal && (
        <ResultModal
          letterChosen={letterChosen}
          onModalClose={closeModalHandler}
        >
          {optionChosen[letterChosen]}
        </ResultModal>
      )}
    </Fragment>
  );
};

export default MainPage;
