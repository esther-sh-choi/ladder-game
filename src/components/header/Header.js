import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import HeaderMenu from "./HeaderMenu";

import styles from "./Header.module.css";

const Header = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const openMenuHandler = (e) => {
    e.preventDefault();

    setOpenMenu((prevState) => !prevState);
  };

  const toggleSoundHandler = (musicOff) => {
    props.onToggleSound(musicOff);
  };

  return (
    <div>
      <div className={styles.headerContainer}>
        <header>
          <h1>{props.title}</h1>
          <p>{props.numPlayer}</p>
        </header>
        <FontAwesomeIcon
          className={styles.barIcon}
          icon={faBars}
          onClick={openMenuHandler}
        ></FontAwesomeIcon>
      </div>
      {openMenu && (
        <HeaderMenu
          className={styles.menu}
          displayMenu={openMenu}
          onToggleSound={toggleSoundHandler}
        />
      )}
    </div>
  );
};

export default Header;
