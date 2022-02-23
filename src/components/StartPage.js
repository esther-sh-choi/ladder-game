import React from "react";

import Instruction from "./Instruction";
import GetPlayerNum from "./start-page/GetPlayerNum";

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
      ></GetPlayerNum>
    </div>
  );
};

export default StartPage;
