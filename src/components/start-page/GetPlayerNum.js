import React, { useState } from "react";

import bgm from "../bgm/bgm";

import Button from "../UI/Button";

import styles from "./GetPlayerNum.module.css";

const GetPlayerNum = (props) => {
  const [playerNum, setPlayerNum] = useState("");

  const playerNumChangeHandler = (e) => {
    setPlayerNum(e.target.value);
  };

  const savePlayerNumHandler = (e) => {
    e.preventDefault();

    props.onGetPlayerNum(playerNum);
    if (!props.musicOff) {
      bgm.melodicTechnoSound.play();
    } else if (props.musicOff) {
      bgm.melodicTechnoSound.pause();
    }
  };

  return (
    <form className={styles.playerNumForm} onSubmit={savePlayerNumHandler}>
      <input
        type="number"
        id={styles.numPlayer}
        step="1"
        min="2"
        max="6"
        onChange={playerNumChangeHandler}
        value={playerNum}
      />
      <Button className={styles.next} type="submit">
        NEXT
      </Button>
    </form>
  );
};

export default GetPlayerNum;
