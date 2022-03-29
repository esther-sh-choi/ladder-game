import React from "react";

import Instruction from "../../components/UI/Instruction";
import OptionInput from "./OptionInput";

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
