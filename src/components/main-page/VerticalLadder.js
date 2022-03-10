import React, { useContext } from "react";

import OptionsContext from "../../store/options-context";
import styles from "./VerticalLadder.module.css";

const VerticalLadder = () => {
  const optionsCtx = useContext(OptionsContext);
  const numPlayer = optionsCtx.options.length;
  return <div className={styles["ladder-container"]}>HELLO</div>;
};

export default VerticalLadder;
