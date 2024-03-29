import React from "react";

import bear from "../../images/player1-bear.png";
import dog from "../../images/player2-dog.png";
import racoon from "../../images/player3-racoon.png";
import cat from "../../images/player4-cat.png";
import fox from "../../images/player5-fox.png";
import panda from "../../images/player6-panda.png";

import styles from "./PlayerIcon.module.css";

const PlayerIcon = (props) => {
  const numPlayer = JSON.parse(localStorage.getItem("playerNum"));
  const icons = [];
  const iconsStr = [];

  for (let i = 0; i < numPlayer; i++) {
    const animalList = [bear, dog, racoon, cat, fox, panda];
    const animalStringList = ["bear", "dog", "racoon", "cat", "fox", "panda"];

    icons.push(animalList[i]);
    iconsStr.push(animalStringList[i]);
  }

  const clickPlayerHandler = (e) => {
    e.preventDefault();
    props.chosenPlayer(e.target.id);
  };

  return (
    <div className={styles["player-icons"]}>
      {icons.map((icon, i) => (
        <img
          src={icon}
          alt={`${iconsStr[i]}-Icon`}
          key={i}
          id={iconsStr[i]}
          className={`${styles.icon} ${
            icons.length === 4 && styles.fourPlayers
          } ${icons.length === 5 && styles.fivePlayers} ${
            icons.length === 6 && styles.sixPlayers
          }`}
          onClick={clickPlayerHandler}
        />
      ))}
    </div>
  );
};

export default PlayerIcon;
