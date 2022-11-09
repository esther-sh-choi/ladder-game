import React from "react";

import styles from "./ResultButtons.module.css";

const ResultButtons = () => {
  const numPlayer = JSON.parse(localStorage.getItem("playerNum"));
  const options = JSON.parse(localStorage.getItem("options"));

  const alphBtns = [];

  for (let i = 0; i < numPlayer; i++) {
    const alphList = ["A", "B", "C", "D", "E", "F"];

    alphBtns.push(alphList[i]);
  }

  const chooseResultHandler = (e) => {
    const resultObj = options.filter((option) => option.id === e.target.id)[0];
    const result = resultObj.inputOption;

    document.getElementById("popup").classList.remove("hide");
    document.getElementById("popup-content").innerHTML = result;
    setTimeout(() => {
      document.getElementById("popup").classList.add("hide");
    }, 5000);
  };

  return (
    <div className={styles["result-btn-container"]}>
      {alphBtns.map((letter, i) => (
        <button
          key={i}
          id={i}
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
