import React from "react";
import ReactDOM from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./ResultModal.module.css";

const Backdrop = ({ onClick }) => {
  return <div className={styles.backdrop} onClick={onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.resultModal}>
      <header>
        <h2>{`Option ${props.letterChosen}`}</h2>
        <FontAwesomeIcon
          className={styles.closeIcon}
          icon={faXmark}
          onClick={props.closeModal}
        ></FontAwesomeIcon>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

const ResultModal = (props) => {
  const closeModalHandler = (e) => {
    e.preventDefault();

    props.onModalClose();
  };

  return (
    <div className={styles.modalContainer}>
      {ReactDOM.createPortal(
        <Backdrop onClick={closeModalHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          letterChosen={props.letterChosen}
          message={props.children}
          closeModal={closeModalHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </div>
  );
};

export default ResultModal;
