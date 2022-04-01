import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "./ResultPage.module.css";

import Button from "../../components/UI/Button";
import ResultModal from "../../components/UI/ResultModal";
import Instruction from "../../components/UI/Instruction";

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

  const numPlayer = JSON.parse(localStorage.getItem("playerNum"));
  const options = JSON.parse(localStorage.getItem("options"));
  const resultLetters = JSON.parse(localStorage.getItem("resultLetters"));

  const icons = [];
  const iconsStr = [];

  for (let i = 0; i < numPlayer; i++) {
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
      setLetterChosen(resultLetters[0]);
      setResult(
        options.filter((option) =>
          Object.keys(option).includes(resultLetters[0])
        )[0]
      );
    } else if (animalChoice === "dog") {
      setLetterChosen(resultLetters[1]);
      setResult(
        options.filter((option) =>
          Object.keys(option).includes(resultLetters[1])
        )[0]
      );
    } else if (animalChoice === "racoon") {
      setLetterChosen(resultLetters[2]);
      setResult(
        options.filter((option) =>
          Object.keys(option).includes(resultLetters[2])
        )[0]
      );
    } else if (animalChoice === "cat") {
      setLetterChosen(resultLetters[3]);
      setResult(
        options.filter((option) =>
          Object.keys(option).includes(resultLetters[3])
        )[0]
      );
    } else if (animalChoice === "fox") {
      setLetterChosen(resultLetters[4]);
      setResult(
        options.filter((option) =>
          Object.keys(option).includes(resultLetters[4])
        )[0]
      );
    } else if (animalChoice === "panda") {
      setLetterChosen(resultLetters[5]);
      setResult(
        options.filter((option) =>
          Object.keys(option).includes(resultLetters[5])
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
        >
          {result[letterChosen]}
        </ResultModal>
      )}
    </Fragment>
  );
};

export default ResultPage;
