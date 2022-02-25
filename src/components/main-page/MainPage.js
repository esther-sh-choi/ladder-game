import React, { useState, Fragment } from "react";

import PlayerIcon from "./PlayerIcon";
import ResultButtons from "./ResultButtons";
import ResultModal from "../UI/ResultModal";
import Button from "../UI/Button";

import styles from "./MainPage.module.css";

const MainPage = (props) => {
  const [resultMessage, setResultMessage] = useState("");
  const [resultLetter, setResultLetter] = useState("");
  const [showResultModal, setShowResultModal] = useState(false);

  const showResultModalHandler = (letter) => {
    const inputResults = props.inputResults;

    setResultMessage(inputResults[letter]);
    setResultLetter(letter);
    setShowResultModal(true);
  };

  const closeModalHandler = () => {
    setShowResultModal(false);
  };

  return (
    <Fragment>
      <div className={styles["main-page"]}>
        <PlayerIcon numPlayer={props.numPlayer}></PlayerIcon>
        <ResultButtons
          numPlayer={props.numPlayer}
          onGetChosenResult={showResultModalHandler}
        />
        <footer className={styles.main}>
          <Button className={styles.restartBtn}>RESTART</Button>
          <Button className={styles.resultBtn}>RESULT</Button>
        </footer>
      </div>
      {showResultModal && (
        <ResultModal
          resultLetter={resultLetter}
          onModalClose={closeModalHandler}
        >
          {resultMessage}
        </ResultModal>
      )}
    </Fragment>
  );
};

export default MainPage;
