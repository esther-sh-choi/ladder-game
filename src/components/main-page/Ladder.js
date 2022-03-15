import React, { useState, useRef, useEffect, useContext } from "react";

import { animatedLine } from "./animatedLine";

import OptionsContext from "../../store/options-context";
import LadderContext from "../../store/ladder-context";
import ladderAlgorithm from "./ladderAlgorithm";
import styles from "./Ladder.module.css";

const Ladder = (props) => {
  const optionsCtx = useContext(OptionsContext);
  const numPlayer = optionsCtx.options.length;

  const ladderCtx = useContext(LadderContext);

  useEffect(() => {
    if (numPlayer === 2) {
      const ladderLayout = ladderAlgorithm.ladderTwo;
      ladderCtx.generateLadderTwo(ladderLayout);
    } else if (numPlayer === 3) {
      const ladderLayout = ladderAlgorithm.ladderThree;
      ladderCtx.generateLadderThree(ladderLayout);
    } else if (numPlayer === 4) {
      const ladderLayout = ladderAlgorithm.ladderFour;
      ladderCtx.generateLadderFour(ladderLayout);
    } else if (numPlayer === 5) {
      const ladderLayout = ladderAlgorithm.ladderFive;
      ladderCtx.generateLadderFive(ladderLayout);
    } else if (numPlayer === 6) {
      console.log(ladderAlgorithm.ladderSix);
      const ladderLayout = ladderAlgorithm.ladderSix;
      ladderCtx.generateLadderSix(ladderLayout);
    }
  }, [numPlayer]);

  const containerSizeRef = useRef();

  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const getContainerSize = () => {
    const newWidth = containerSizeRef.current.clientWidth;
    setWidth(newWidth);

    const newHeight = containerSizeRef.current.clientHeight;

    const ratio = newWidth / newHeight;

    setHeight(newWidth / ratio);
  };

  useEffect(() => {
    getContainerSize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getContainerSize);
  }, []);

  console.log(width);
  console.log(height);

  const canvasRef = useRef(null);

  const drawVertical = (ctx, w, h) => {
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
  };

  const drawHorizontal = (ctx, w, h) => {
    ctx.lineWidth = 6;
    ctx.strokeStyle = "white";

    const lengthHorizontal = w / numPlayer;
    const position_x = w / (numPlayer * 2);
    const position_y = h / 9;

    for (let i = 1; i < 9; i++) {
      for (let j = 1; j <= numPlayer * 2 - 3; j = j + 2)
        if (ladderCtx.ladderArr[i][j] === 1) {
          ctx.beginPath();
          ctx.moveTo(position_x * j, position_y * i);
          ctx.lineTo(position_x * j + lengthHorizontal, position_y * i);
          ctx.stroke();
        }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    drawVertical(context, width, height);
    if (ladderCtx.ladderArr.length > 0) {
      drawHorizontal(context, width, height);
    }
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (props.player) {
      animatedLine(
        context,
        width,
        height,
        numPlayer,
        ladderCtx,
        optionsCtx,
        props.player
      );
    }
    // console.log(optionsCtx.results);
  }, [optionsCtx, props.player]);

  return (
    <div className={styles["ladder-container"]} ref={containerSizeRef}>
      <canvas
        className={styles.canvas}
        width={width}
        height={height}
        ref={canvasRef}
        {...props}
      ></canvas>
    </div>
  );
};

export default Ladder;
