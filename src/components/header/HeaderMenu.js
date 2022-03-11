import React, { useState } from "react";

import bgm from "../bgm/bgm";

import styles from "./HeaderMenu.module.css";

const HeaderMenu = (props) => {
  const [musicOff, setMusicOff] = useState(false);

  const toggleSoundHandler = () => {
    setMusicOff((prevState) => !prevState);
    props.onToggleSound(musicOff);
    console.log(musicOff);
    // if (musicOff && bgm.melodicTechnoSound.playing()) {
    //   pauseBGM();
    // } else if (!musicOff && !bgm.melodicTechnoSound.playing()) {
    //   playBGM();
    // }
  };

  return (
    <div className={props.displayMenu ? "" : `${styles.hide}`}>
      <div className={styles.backdrop}></div>
      <div className={styles.menu}>
        <ul className={styles.menuList}>
          <li>
            Music
            <p className={styles["on-off"]} onClick={toggleSoundHandler}>
              {musicOff ? "ON" : "OFF"}
            </p>
          </li>
          <li className={styles.changeMusic}>Change Music</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMenu;
