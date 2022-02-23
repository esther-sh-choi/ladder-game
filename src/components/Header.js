import React, { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <div className={styles.headerContainer}>
        <header>
          <h1>{props.title}</h1>
          <p>{props.numPlayer}</p>
        </header>
        <FontAwesomeIcon
          className={styles.barIcon}
          icon={faBars}
        ></FontAwesomeIcon>
      </div>
    </Fragment>
  );
};

export default Header;
