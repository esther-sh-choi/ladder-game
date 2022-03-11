import React, { useState, useRef, useEffect, useContext } from "react";

import OptionsContext from "../../store/options-context";
import styles from "./VerticalLadder.module.css";

const VerticalLadder = (props) => {
  const optionsCtx = useContext(OptionsContext);
  const numPlayer = optionsCtx.options.length;

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

  const draw = (ctx, w, h) => {
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

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    draw(context, width, height);
  }, [draw]);

  return (
    <div className={styles["ladder-container"]} ref={containerSizeRef}>
      <canvas
        className={styles.canvas}
        width={width}
        height={height}
        ref={canvasRef}
        {...props}
      />
    </div>
  );
};

export default VerticalLadder;
