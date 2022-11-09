import React, { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LadderContext from "../../store/ladder-context";

import Button from "../UI/Button";

import styles from "./GetPlayerNum.module.css";

const GetPlayerNum = (props) => {
  const navigate = useNavigate();
  const playerNumRef = useRef();
  const ladderCtx = useContext(LadderContext);

  const savePlayerNumHandler = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "playerNum",
      JSON.stringify(playerNumRef.current.value)
    );

    const playerNum = JSON.parse(localStorage.getItem("playerNum"));

    ladderCtx.generateLadder(playerNum);

    navigate("/option");
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
