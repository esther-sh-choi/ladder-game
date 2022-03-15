import { createContext, useEffect, useState } from "react";

import bgm from "../components/bgm/bgm";

const MusicContext = createContext([]);

export const MusicContextProvider = (props) => {
  const [musicOff, setMusicOff] = useState(false);
  const [chosenSong, setChosenSong] = useState(0);

  const songList = [
    bgm.melodicTechnoSound,
    bgm.KidsDowntempSound,
    bgm.LightStepSound,
    bgm.SpyJazzSound,
    bgm.TechnoSound,
  ];

  const playBGMHandler = () => {
    console.log(chosenSong);

    songList[chosenSong].play();
  };

  const changeSongHandler = () => {
    for (let j = 0; j < 5; j++) {
      songList[j].stop();
    }

    if (chosenSong === 0) {
      setChosenSong(1);
    } else if (chosenSong === 1) {
      setChosenSong(2);
    } else if (chosenSong === 2) {
      setChosenSong(3);
    } else if (chosenSong === 3) {
      setChosenSong(4);
    } else if (chosenSong === 4) {
      setChosenSong(0);
    }
  };

  const toggleMusicHandler = () => {
    setMusicOff((prev) => !prev);
  };

  useEffect(() => {
    if (musicOff === true) {
      songList[chosenSong].stop();
    } else if (musicOff === false) {
      songList[chosenSong].play();
      console.log(chosenSong);
    }
  }, [musicOff, chosenSong]);

  const context = {
    currentSong: chosenSong,
    musicOff: musicOff,
    playBGM: playBGMHandler,
    changeSong: changeSongHandler,
    toggleMusic: toggleMusicHandler,
  };

  return (
    <MusicContext.Provider value={context}>
      {props.children}
    </MusicContext.Provider>
  );
};

export default MusicContext;
