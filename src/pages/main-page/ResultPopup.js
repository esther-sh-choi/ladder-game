import React from "react";

import styles from "./ResultPopup.module.css";
import "./ResultPopup.css";

const ResultPopUp = () => {
  const closePopupHandler = () => {
    document.getElementById("popup").classList.add("hide");
  };

  return (
    <div
      id={"popup"}
      className={`${styles.modalContainer} hide`}
      onClick={closePopupHandler}
    >
      <div className={styles.backdrop}></div>
      <div className={styles.popup}>
        <div className={styles["popup-content"]}>
          <p id={"popup-content"}></p>
        </div>
      </div>
    </div>
  );
};

export default ResultPopUp;
