export const redrawLine = (ctx, w, h, numPlayer, ladderCtx, player) => {
  const horizontalUnit = w / (numPlayer * 2);
  const verticalUnit = h / 9;
  let index;
  let position_x;
  let position_y = 0;

  if (player === "bear") {
    position_x = horizontalUnit;
    index = 0;
    ctx.strokeStyle = "#f5c000";
  } else if (player === "dog") {
    position_x = horizontalUnit * 3;
    index = 1;
    ctx.strokeStyle = "#1a81ff";
  } else if (player === "racoon") {
    position_x = horizontalUnit * 5;
    index = 2;
    ctx.strokeStyle = "#00c281";
  } else if (player === "cat") {
    position_x = horizontalUnit * 7;
    index = 3;
    ctx.strokeStyle = "#ff5797";
  } else if (player === "fox") {
    position_x = horizontalUnit * 9;
    index = 4;
    ctx.strokeStyle = "#443dff";
  } else if (player === "panda") {
    position_x = horizontalUnit * 11;
    index = 5;
    ctx.strokeStyle = "#85ff47";
  }

  const moveX = ladderCtx.pathX[index].slice();
  moveX.unshift(0);
  console.log(moveX);

  ctx.lineWidth = 7.5;

  ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    if (moveX[i] === 0) {
      // move down one unit
      ctx.moveTo(position_x, position_y);
      position_y += verticalUnit;
      ctx.lineTo(position_x, position_y);
    } else if (moveX[i] === 2) {
      // move right 2 units and down 1 unit

      ctx.moveTo(position_x, position_y);
      position_x += horizontalUnit * 2;
      ctx.lineTo(position_x, position_y);
      position_y += verticalUnit;
      ctx.lineTo(position_x, position_y);
    } else if (moveX[i] === -2) {
      // move left 2 units and down 1 unit

      ctx.moveTo(position_x, position_y);
      position_x -= horizontalUnit * 2;
      ctx.lineTo(position_x, position_y);
      position_y += verticalUnit;
      ctx.lineTo(position_x, position_y);
    }
  }
  ctx.stroke();
};
