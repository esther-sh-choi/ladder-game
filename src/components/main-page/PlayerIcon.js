import React, { useContext } from "react";

import OptionsContext from "../../store/options-context";

import styles from "./PlayerIcon.module.css";
import bear from "../../images/player1-bear.png";
import dog from "../../images/player2-dog.png";
import racoon from "../../images/player3-racoon.png";
import cat from "../../images/player4-cat.png";
import fox from "../../images/player5-fox.png";
import panda from "../../images/player6-panda.png";

const PlayerIcon = (props) => {
  const optionsCtx = useContext(OptionsContext);

  const icons = [];

  for (let i = 0; i < optionsCtx.options.length; i++) {
    const animalList = [bear, dog, racoon, cat, fox, panda];

    icons.push(animalList[i]);
  }

  return (
    <div className={styles["player-icons"]}>
      {icons.map((icon, i) => (
        <img
          src={icon}
          alt={`${icon}-Icon`}
          key={i}
          className={`${styles.icon} ${
            icons.length === 4 && styles.fourPlayers
          } ${icons.length === 5 && styles.fivePlayers} ${
            icons.length === 6 && styles.sixPlayers
          }`}
        />
      ))}
    </div>
  );
};

export default PlayerIcon;
