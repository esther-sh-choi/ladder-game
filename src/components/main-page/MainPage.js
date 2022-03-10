import React, { useState, Fragment, useContext } from "react";

import PlayerIcon from "./PlayerIcon";
import ResultButtons from "./ResultButtons";
import ResultModal from "../UI/ResultModal";
import Button from "../UI/Button";
import OptionsContext from "../../store/options-context";

import styles from "./MainPage.module.css";

const MainPage = () => {
  const optionsCtx = useContext(OptionsContext);

  const [optionChosen, setOptionChosen] = useState("");
  const [letterChosen, setLetterChosen] = useState("");
  const [showResultModal, setShowResultModal] = useState(false);

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

  return (
    <Fragment>
      <div className={styles["main-page"]}>
        <PlayerIcon></PlayerIcon>
        <ResultButtons onGetChosenResult={showResultModalHandler} />
        <footer className={styles.main}>
          <Button className={styles.restartBtn}>RESTART</Button>
          <Button className={styles.resultBtn}>RESULT</Button>
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
