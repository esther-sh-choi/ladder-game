import React from "react";

import styles from "./ResultButtons.module.css";

const ResultButtons = (props) => {
  const alphBtns = [];

  for (let i = 0; i < props.numPlayer; i++) {
    const alphList = ["A", "B", "C", "D", "E", "F"];

    alphBtns.push(alphList[i]);
  }

  const chooseResultHandler = (e) => {
    e.preventDefault();

    props.onGetChosenResult(e.target.value);
  };

  return (
    <div
      className={`${styles["result-btn-container"]} ${
        alphBtns.length === 2 && styles.two
      } ${alphBtns.length === 3 && styles.three} ${
        alphBtns.length === 4 && styles.four
      } ${alphBtns.length === 5 && styles.five} ${
        alphBtns.length === 6 && styles.six
      }`}
    >
      {alphBtns.map((letter, i) => (
        <button
          key={i}
          className={styles.resultBtns}
          value={letter}
          onClick={chooseResultHandler}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default ResultButtons;
