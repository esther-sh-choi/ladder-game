import React from "react";

import styles from "./ResultModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ResultModal = (props) => {
  const closeModalHandler = (e) => {
    e.preventDefault();

    props.onModalClose();
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.backdrop}></div>
      <div className={styles.resultModal}>
        <header>
          <h2>{`Option ${props.letterChosen}`}</h2>
          <FontAwesomeIcon
            className={styles.closeIcon}
            icon={faXmark}
            onClick={closeModalHandler}
          ></FontAwesomeIcon>
        </header>
        <div className={styles.content}>
          <p>{props.children}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
