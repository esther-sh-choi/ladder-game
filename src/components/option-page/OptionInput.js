import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "../UI/Button";

import styles from "./OptionInput.module.css";

const OptionInput = (props) => {
  const history = useHistory();

  let options = [];
  for (let i = 0; i < props.numPlayer; i++) {
    const alphabets = ["A", "B", "C", "D", "E", "F"];
    options.push(alphabets[i]);
  }

  const [resultOptions, setResultOptions] = useState({});

  const resultOptionChangeHandler = (e) => {
    const value = e.target.value;
    setResultOptions({
      ...resultOptions,
      [e.target.name]: value,
    });
  };

  const saveResultOptions = (e) => {
    e.preventDefault();

    // console.log(resultOptions);

    props.onGetSavedOption(resultOptions);
    history.push("/main_game");
  };

  return (
    <form className={styles.optionInputForm} onSubmit={saveResultOptions}>
      <ul>
        {options.map((option, i) => {
          return (
            <li className={styles.option} key={i}>
              <span className={styles.letterIcon}>{option}</span>
              <input
                type="text"
                name={option}
                placeholder={`Type Option ${option}`}
                maxLength="30"
                onChange={resultOptionChangeHandler}
              />
            </li>
          );
        })}
      </ul>
      <Button className={styles.startBtn} type="submit">
        START
      </Button>
    </form>
  );
};

export default OptionInput;
