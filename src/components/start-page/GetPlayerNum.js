import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

import bgm from "../bgm/bgm";

import Button from "../UI/Button";

import styles from "./GetPlayerNum.module.css";

const playBGM = () => {
  bgm.melodicTechnoSound.play();
};
const pauseBGM = () => {
  bgm.melodicTechnoSound.pause();
};

const GetPlayerNum = (props) => {
  const playerNumRef = useRef();

  const history = useHistory();

  const savePlayerNumHandler = (e) => {
    e.preventDefault();

    const playerNum = playerNumRef.current.value;
    if (!playerNum) {
      return;
    }
    props.onGetPlayerNum(playerNum);

    console.log(playerNum);

    if (!props.musicOff) {
      playBGM();
    } else if (props.musicOff) {
      pauseBGM();
    }

    history.push("/option");
  };

  return (
    <form className={styles.playerNumForm} onSubmit={savePlayerNumHandler}>
      <input
        type="number"
        id={styles.numPlayer}
        step="1"
        min="2"
        max="6"
        ref={playerNumRef}
      />
      <Button className={styles.next} type="submit">
        NEXT
      </Button>
    </form>
  );
};

export default GetPlayerNum;
