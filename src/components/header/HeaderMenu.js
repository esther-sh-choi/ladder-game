import React, { useContext } from "react";

import MusicContext from "../../store/music_play-context";

import styles from "./HeaderMenu.module.css";

const HeaderMenu = (props) => {
  const musicCtx = useContext(MusicContext);

  const toggleSoundHandler = () => {
    musicCtx.toggleMusic();

    for (let j = 0; j < 5; j++) {
      musicCtx.songList[j].stop();
    }
  };

  const changeMusicHandler = () => {
    musicCtx.changeSong();
  };

  return (
    <div className={props.displayMenu ? "" : `${styles.hide}`}>
      <div className={styles.backdrop}></div>
      <div className={styles.menu}>
        <ul className={styles.menuList}>
          <li>
            Music
            <p className={styles["on-off"]} onClick={toggleSoundHandler}>
              {musicCtx.musicOff ? "ON" : "OFF"}
            </p>
          </li>
          <li className={styles.changeMusic} onClick={changeMusicHandler}>
            Change Music
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMenu;
