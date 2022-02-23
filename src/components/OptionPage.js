import React, { Fragment } from "react";

import Instruction from "./Instruction";
import OptionInput from "./option-page/OptionInput";

import styles from "./OptionPage.module.css";

const OptionPage = (props) => {
  return (
    <div className={styles.optionPage}>
      <Instruction className={styles.optionInst}>
        Type in the results.
        <br />
        (Max 30 characters)
      </Instruction>
      <OptionInput className={styles.optionInput} numPlayer={props.numPlayer} />
    </div>
  );
};

export default OptionPage;
