import React from "react";

import Instruction from "../UI/Instruction";
import OptionInput from "./OptionInput";

import styles from "./OptionPage.module.css";

const OptionPage = (props) => {
  const saveOptionsHandler = (optionsObj) => {
    props.onSaveOptions(optionsObj);
  };

  // console.log(inputOptions);

  return (
    <div className={styles.optionPage}>
      <Instruction className={styles.optionInst}>
        Type in the results.
        <br />
        (Max 30 characters)
      </Instruction>
      <OptionInput
        className={styles.optionInput}
        numPlayer={props.numPlayer}
        onGetSavedOption={saveOptionsHandler}
      />
    </div>
  );
};

export default OptionPage;
