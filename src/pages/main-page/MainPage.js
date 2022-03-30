import React from "react";
import { useHistory } from "react-router-dom";

import Ladder from "./Ladder";

import Button from "../../components/UI/Button";
import ResultButtons from "./ResultButtons";

import styles from "./MainPage.module.css";

const MainPage = () => {
  const history = useHistory();

  const displayResultsHandler = () => {
    history.push("/result");
  };

  return (
    <div className={styles["main-page"]}>
      <div className={styles["vertical-ladder"]}>
        <Ladder />
      </div>
      <ResultButtons />
      <footer className={styles.main}>
        <Button
          className={styles.restartBtn}
          onClick={() => {
            history.push("/");
            window.location.reload(false);
          }}
        >
          RESTART
        </Button>
        <Button className={styles.resultBtn} onClick={displayResultsHandler}>
          RESULT
        </Button>
      </footer>
    </div>
  );
};

export default MainPage;
