import React from "react";

import styles from "./OptionInput.module.css";

const OptionInput = (props) => {
  let options = [];
  for (let i = 0; i < props.numPlayer; i++) {
    const alphabets = ["A", "B", "C", "D", "E", "F"];
    options.push(alphabets[i]);
  }
  console.log(options);

  return (
    <ul>
      {options.map((option, i) => {
        return (
          <li className={styles.option} key={i}>
            <span className={styles.letterIcon}>{option}</span>
            <input type="text" />
          </li>
        );
      })}
    </ul>
  );
};

export default OptionInput;
