import React from "react";

import styles from "./Instruction.module.css";

const Instruction = (props) => {
  return (
    <p className={`${styles.instruction} ${props.className}`}>
      {props.children}
    </p>
  );
};

export default Instruction;
