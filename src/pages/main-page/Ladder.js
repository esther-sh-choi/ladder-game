import React, { useState, useRef, useEffect, useContext } from "react";

import { animatedLine } from "./animatedLine";

import PlayerIcon from "./PlayerIcon";
import ResultButtons from "./ResultButtons";
import ResultPopup from "./ResultPopup";
import OptionsContext from "../../store/options-context";
import LadderContext from "../../store/ladder-context";
import styles from "./Ladder.module.css";

const Ladder = (props) => {
  const optionsCtx = useContext(OptionsContext);
  const numPlayer = optionsCtx.options.length;

  const ladderCtx = useContext(LadderContext);

  const containerSizeRef = useRef();

  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const getContainerSize = () => {
    const newHeight = containerSizeRef.current.clientHeight;
    setHeight(newHeight);
    const newWidth = containerSizeRef.current.clientWidth;
    setWidth(newWidth);
  };

  const playerSelectHandler = (chosenPlayer) => {
    console.log(chosenPlayer);

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    animatedLine(
      context,
      width,
      height,
      numPlayer,
      ladderCtx,
      chosenPlayer,
      optionsCtx
    );
  };

  useEffect(() => {
    getContainerSize();
    // window.addEventListener("resize", getContainerSize);
    // return () => {
    //   window.removeEventListener("resize", getContainerSize);
    // };
  }, []);

  const canvasRef = useRef(null);

  const drawLadder = (ctx, w, h) => {
    ctx.lineWidth = 6;
    ctx.strokeStyle = "white";
    ctx.lineCap = "round";

    const divWidthEqually = w / (numPlayer * 2);

    for (let i = 0; i < numPlayer; i++) {
      ctx.beginPath();
      ctx.moveTo(divWidthEqually * (2 * i + 1), 0);
      ctx.lineTo(divWidthEqually * (2 * i + 1), h);
      ctx.stroke();
    }

    //draw horizontal
    const lengthHorizontal = w / numPlayer;
    const position_x = w / (numPlayer * 2);
    const position_y = h / 9;

    if (ladderCtx.ladderArr.length > 0) {
      for (let i = 1; i < 9; i++) {
        for (let j = 1; j <= numPlayer * 2 - 3; j = j + 2)
          if (ladderCtx.ladderArr[i][j] === 1) {
            ctx.beginPath();
            ctx.moveTo(position_x * j, position_y * i);
            ctx.lineTo(position_x * j + lengthHorizontal, position_y * i);
            ctx.stroke();
          }
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    drawLadder(context, width, height);
  });

  return (
    <React.Fragment>
      <div className={styles["player-ladder"]}>
        <PlayerIcon chosenPlayer={playerSelectHandler} />
        <div className={styles["ladder-container"]} ref={containerSizeRef}>
          <canvas
            className={styles.canvas}
            height={height}
            width={width}
            ref={canvasRef}
            {...props}
          ></canvas>
        </div>
        <ResultButtons />
      </div>
      <ResultPopup />
    </React.Fragment>
  );
};

export default Ladder;
