import React from "react";
import { useNavigate } from "react-router-dom";

import Ladder from "../../components/Ladder/";
import Button from "../../components/UI/Button";
import ResultButtons from "../../components/ResultButtons/";

import styles from "./MainPage.module.css";

const MainPage = () => {
  const navigate = useNavigate();

  const displayResultsHandler = () => {
    navigate("/result");
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
            navigate("/");
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
