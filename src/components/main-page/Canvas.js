import React, { useState, useRef, useEffect } from "react";

const Canvas = (props) => {
  const containerSizeRef = useRef();

  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const getContainerSize = () => {
    const newWidth = containerSizeRef.current.clientWidth;
    setWidth(newWidth);

    const newHeight = containerSizeRef.current.clientWidth;
    setHeight(newHeight);

    console.log(width);
    console.log(height);
  };

  useEffect(() => {
    getContainerSize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getContainerSize);
  }, []);

  const canvasRef = useRef(null);

  const draw = (ctx) => {
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "white";

    for (let i = 0; i < numPlayer; i++) {
      ctx.beginPath();
      ctx.moveTo(50 + i * 30, 0);
      ctx.lineTo(50 + i * 30, 100);
      ctx.stroke();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    draw(context);
  }, [draw]);

  return <canvas id="canvas" width={500} height={300} ref={canvasRef} />;
};

export default Canvas;

{
  /* <canvas id="canvas" width={300} height={300} ref={canvasRef} {...props} /> */
}
