import React, { Fragment, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "./ResultPage.module.css";

import OptionsContext from "../../store/options-context";
import LadderContext from "../../store/ladder-context";
import Button from "../UI/Button";
import ResultModal from "../UI/ResultModal";
import Instruction from "../UI/Instruction";

import bear from "../../images/player1-bear.png";
import dog from "../../images/player2-dog.png";
import racoon from "../../images/player3-racoon.png";
import cat from "../../images/player4-cat.png";
import fox from "../../images/player5-fox.png";
import panda from "../../images/player6-panda.png";

const ResultPage = (props) => {
  const history = useHistory();
  const [openModal, setOpenModal] = useState(false);
  const [letterChosen, setLetterChosen] = useState("");
  const [animalChoice, setAnimalChoice] = useState("");
  const [result, setResult] = useState({});

  const optionsCtx = useContext(OptionsContext);
  const ladderCtx = useContext(LadderContext);

  const icons = [];
  const iconsStr = [];

  for (let i = 0; i < optionsCtx.options.length; i++) {
    const animalList = [bear, dog, racoon, cat, fox, panda];
    const animalStringList = ["bear", "dog", "racoon", "cat", "fox", "panda"];

    icons.push(animalList[i]);
    iconsStr.push(animalStringList[i]);
  }

  const clickPlayerResultHandler = (e) => {
    e.preventDefault();

    setOpenModal(true);

    setResultHandler(e.target.id);
  };

  const setResultHandler = (animalChoice) => {
    setAnimalChoice(animalChoice);
    if (animalChoice === "bear") {
      setLetterChosen(ladderCtx.resultLetters[0]);
      setResult(
        optionsCtx.options.filter((option) =>
          Object.keys(option).includes(ladderCtx.resultLetters[0])
        )[0]
      );
    } else if (animalChoice === "dog") {
      setLetterChosen(ladderCtx.resultLetters[1]);
      setResult(
        optionsCtx.options.filter((option) =>
          Object.keys(option).includes(ladderCtx.resultLetters[1])
        )[0]
      );
    } else if (animalChoice === "racoon") {
      setLetterChosen(ladderCtx.resultLetters[2]);
      setResult(
        optionsCtx.options.filter((option) =>
          Object.keys(option).includes(ladderCtx.resultLetters[2])
        )[0]
      );
    } else if (animalChoice === "cat") {
      setLetterChosen(ladderCtx.resultLetters[3]);
      setResult(
        optionsCtx.options.filter((option) =>
          Object.keys(option).includes(ladderCtx.resultLetters[3])
        )[0]
      );
    } else if (animalChoice === "fox") {
      setLetterChosen(ladderCtx.resultLetters[4]);
      setResult(
        optionsCtx.options.filter((option) =>
          Object.keys(option).includes(ladderCtx.resultLetters[4])
        )[0]
      );
    } else if (animalChoice === "panda") {
      setLetterChosen(ladderCtx.resultLetters[5]);
      setResult(
        optionsCtx.options.filter((option) =>
          Object.keys(option).includes(ladderCtx.resultLetters[5])
        )[0]
      );
    }
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <Fragment>
      <div className={styles["result-container"]}>
        <Instruction>Results</Instruction>
        <div className={styles["icons-container"]}>
          {icons.map((icon, i) => (
            <img
              src={icon}
              alt={`${iconsStr[i]}-Icon`}
              key={i}
              id={iconsStr[i]}
              className={`${styles["result-icons"]} ${
                icons.length === 4 && styles.fourPlayers
              } ${icons.length === 5 && styles.fivePlayers} ${
                icons.length === 6 && styles.sixPlayers
              }`}
              onClick={clickPlayerResultHandler}
            />
          ))}
        </div>
        <Button
          className={styles.replay}
          onClick={() => {
            history.push("/");
            window.location.reload(false);
          }}
        >
          Replay
        </Button>
      </div>
      {openModal && (
        <ResultModal
          onModalClose={closeModalHandler}
          letterChosen={letterChosen}
          animalChoice={animalChoice}
          onModalClose={closeModalHandler}
        >
          {result[letterChosen]}
        </ResultModal>
      )}
    </Fragment>
  );
};

export default ResultPage;
