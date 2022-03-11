import React, { useContext } from "react";

import OptionsContext from "../../store/options-context";
import styles from "./ResultButtons.module.css";

const ResultButtons = (props) => {
  const optionsCtx = useContext(OptionsContext);

  const alphBtns = [];

  for (let i = 0; i < optionsCtx.options.length; i++) {
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
