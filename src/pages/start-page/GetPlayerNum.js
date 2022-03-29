import React, { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import LadderContext from "../../store/ladder-context";

import Button from "../../components/UI/Button";

import styles from "./GetPlayerNum.module.css";

const GetPlayerNum = (props) => {
  const playerNumRef = useRef();
  const ladderCtx = useContext(LadderContext);

  const history = useHistory();

  const savePlayerNumHandler = (e) => {
    e.preventDefault();

    const playerNum = playerNumRef.current.value;
    if (!playerNum) {
      return;
    }
    props.onGetPlayerNum(playerNum);
    ladderCtx.generateLadder(playerNum);

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
