import React, { Fragment, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "./ResultPage.module.css";

import OptionsContext from "../../store/options-context";
import Button from "../UI/Button";
import ResultModal from "../UI/ResultModal";

import bear from "../../images/player1-bear.png";
import dog from "../../images/player2-dog.png";
import racoon from "../../images/player3-racoon.png";
import cat from "../../images/player4-cat.png";
import fox from "../../images/player5-fox.png";
import panda from "../../images/player6-panda.png";

const ResultPage = (props) => {
  const history = useHistory();
  const [openModal, setOpenModal] = useState(false);

  const optionsCtx = useContext(OptionsContext);

  console.log(optionsCtx.options.length);

  const icons = [];
  const iconsStr = [];

  for (let i = 0; i < optionsCtx.options.length; i++) {
    const animalList = [bear, dog, racoon, cat, fox, panda];
    const animalStringList = ["bear", "dog", "racoon", "cat", "fox", "panda"];

    icons.push(animalList[i]);
    iconsStr.push(animalStringList[i]);
  }

  console.log(icons);
  console.log(iconsStr);

  const clickPlayerResultHandler = (e) => {
    e.preventDefault();

    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <Fragment>
      <div className={styles["result-container"]}>
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
        <ResultModal onModalClose={closeModalHandler}></ResultModal>
      )}
    </Fragment>
  );
};

export default ResultPage;
