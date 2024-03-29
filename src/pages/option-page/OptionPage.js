import React from "react";

import Instruction from "../../components/UI/Instruction";
import OptionInput from "../../components/OptionInput/";

import styles from "./OptionPage.module.css";

const OptionPage = (props) => {
  return (
    <div className={styles.optionPage}>
      <Instruction className={styles.optionInst}>
        Type in the results.
        <br />
        (Max 30 characters)
      </Instruction>
      <OptionInput className={styles.optionInput} />
    </div>
  );
};

export default OptionPage;
