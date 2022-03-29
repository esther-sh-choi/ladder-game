import React from "react";

import Instruction from "../../components/UI/Instruction";
import GetPlayerNum from "./GetPlayerNum";

import styles from "./StartPage.module.css";

const StartPage = (props) => {
  const savePlayerNumHandler = (num) => {
    props.onSavePlayerNum(num);
  };

  return (
    <div className={styles.start}>
      <Instruction className={styles.instruction}>
        Enter the number of players.
        <br />
        (2-6 Players)
      </Instruction>
      <GetPlayerNum
        className={styles.playerNum}
        onGetPlayerNum={savePlayerNumHandler}
        musicOff={props.musicOff}
      ></GetPlayerNum>
    </div>
  );
};

export default StartPage;
