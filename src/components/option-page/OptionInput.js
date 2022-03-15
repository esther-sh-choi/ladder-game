import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import Button from "../UI/Button";
import OptionsContext from "../../store/options-context";

import styles from "./OptionInput.module.css";

const OptionInput = (props) => {
  const history = useHistory();

  const optionsCtx = useContext(OptionsContext);

  let options = [];
  for (let i = 0; i < props.numPlayer; i++) {
    const alphabets = ["A", "B", "C", "D", "E", "F"];
    options.push(alphabets[i]);
  }

  const [resultOptions, setResultOptions] = useState([]);

  let value;
  let key;
  let letter;

  const resultOptionChangeHandler = (e) => {
    value = e.target.value;
    key = e.target.id;
    letter = e.target.name;

    // FIX BUG - When fixing typing, it saves multiple
    setResultOptions([
      ...resultOptions,
      {
        id: key,
        [letter]: value,
      },
    ]);
  };

  const saveResultOptions = (e) => {
    e.preventDefault();

    if (props.numPlayer > resultOptions.length) {
      // If there is empty section
      return;
    }

    console.log(resultOptions);

    optionsCtx.saveOptions([...resultOptions]);

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
                minLength="1"
                maxLength="30"
                id={i}
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
