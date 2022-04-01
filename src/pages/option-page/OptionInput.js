import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import Button from "../../components/UI/Button";
import OptionsContext from "../../store/options-context";

import styles from "./OptionInput.module.css";

const OptionInput = () => {
  const history = useHistory();

  const optionsCtx = useContext(OptionsContext);
  const numPlayer = JSON.parse(localStorage.getItem("playerNum"));

  let options = [];
  for (let i = 0; i < numPlayer; i++) {
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

    if (!resultOptions.some((item) => item.id === key)) {
      // if there is no item in the array with this key, add this new data
      setResultOptions([
        ...resultOptions,
        { id: key, [letter]: value, letter: letter },
      ]);
    } else {
      const newData = resultOptions.map((item) => {
        if (item.id === key) {
          item[letter] = value;
        }
        return item;
      });

      setResultOptions(newData);
    }
  };

  const saveResultOptions = (e) => {
    e.preventDefault();

    if (numPlayer > resultOptions.length) {
      // If there is empty section
      return;
    }

    optionsCtx.saveOptions([...resultOptions]);

    history.push("/main");
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
