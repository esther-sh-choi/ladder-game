export const animatedLine = (
  ctx,
  w,
  h,
  numPlayer,
  ladderCtx,
  optionsCtx,
  player
) => {
  let position_x;
  let position_y;
  let current_x;
  let current_y;

  console.log(player);
  if (player === "bear") {
    ctx.strokeStyle = "#f5c000";
    position_x = 1;
    current_x = 0;
  } else if (player === "dog") {
    ctx.strokeStyle = "#1a81ff";
    position_x = 3;
    current_x = 2;
  } else if (player === "racoon") {
    ctx.strokeStyle = "#00c281";
    position_x = 5;
    current_x = 4;
  } else if (player === "cat") {
    ctx.strokeStyle = "#ff5797";
    position_x = 7;
    current_x = 6;
  } else if (player === "fox") {
    ctx.strokeStyle = "#443dff";
    position_x = 9;
    current_x = 8;
  } else if (player === "panda") {
    ctx.strokeStyle = "#85ff47";
    position_x = 11;
    current_x = 10;
  }

  console.log(current_x);

  ctx.lineWidth = 7;

  const horizontalUnit = w / (numPlayer * 2);
  const verticalUnit = h / 9;

  ctx.beginPath();
  ctx.moveTo(horizontalUnit * position_x, 0);
  ctx.lineTo(horizontalUnit * position_x, verticalUnit);
  ctx.stroke();

  position_x = horizontalUnit * position_x;
  position_y = verticalUnit;

  // make an array and push the path into it. x = [1] and y = []

  let moveX = [];
  let moveY = [];

  for (let y = 1; y < 9; y++) {
    current_y = y;
    if (current_x >= 2 && ladderCtx.ladderArr[current_y][current_x - 1] === 0) {
      if (
        current_x < numPlayer * 2 - 2 &&
        ladderCtx.ladderArr[current_y][current_x + 1] === 0
      ) {
        moveX.push(0);
        moveY.push(current_y);
      } else if (
        current_x < numPlayer * 2 - 2 &&
        ladderCtx.ladderArr[current_y][current_x + 1] === 1
      ) {
        current_x += 2;

        moveX.push(2);
        moveY.push(current_y);
      } else if (current_x === numPlayer * 2 - 2) {
        moveX.push(0);
        moveY.push(current_y);
      }
    } else if (
      current_x >= 2 &&
      ladderCtx.ladderArr[current_y][current_x - 1] === 1
    ) {
      current_x -= 2;

      moveX.push(-2);
      moveY.push(current_y);
    } else if (
      current_x === 0 &&
      ladderCtx.ladderArr[current_y][current_x + 1] === 0
    ) {
      moveX.push(0);
      moveY.push(current_y);
    } else if (
      current_x === 0 &&
      ladderCtx.ladderArr[current_y][current_x + 1] === 1
    ) {
      current_x += 2;

      moveX.push(2);
      moveY.push(current_y);
    }
  }

  console.log(moveX);
  console.log(moveY);

  for (let i = 0; i < 9; i++) {
    if (moveX[i] === 0) {
      ctx.beginPath();
      ctx.moveTo(position_x, position_y);
      ctx.lineTo(position_x, position_y + verticalUnit);
      ctx.stroke();
      position_y += verticalUnit;
    } else if (moveX[i] === 2) {
      ctx.beginPath();
      ctx.moveTo(position_x, position_y);
      ctx.lineTo(position_x + horizontalUnit * 2, position_y);
      position_x += horizontalUnit * 2;
      ctx.lineTo(position_x, position_y + verticalUnit);
      ctx.stroke();
      position_y += verticalUnit;
    } else if (moveX[i] === -2) {
      ctx.beginPath();
      ctx.moveTo(position_x, position_y);
      ctx.lineTo(position_x - horizontalUnit * 2, position_y);
      position_x -= horizontalUnit * 2;
      ctx.lineTo(position_x, position_y + verticalUnit);
      ctx.stroke();
      position_y += verticalUnit;
    }
  }

  const resultPosition = moveX.reduce((acc, current) => acc + current, 0);
  let results = [];

  if (resultPosition === 0) {
    results.push({ [player]: "A" });
  } else if (resultPosition === 2) {
    results.push({ [player]: "B" });
  } else if (resultPosition === 4) {
    results.push({ [player]: "C" });
  } else if (resultPosition === 6) {
    results.push({ [player]: "D" });
  } else if (resultPosition === 8) {
    results.push({ [player]: "E" });
  } else if (resultPosition === 10) {
    results.push({ [player]: "F" });
  }

  optionsCtx.saveResults(results);

  // const resultPositions = [
  //   Math.floor(horizontalUnit * 1),
  //   Math.floor(horizontalUnit * 3),
  //   Math.floor(horizontalUnit * 5),
  //   Math.floor(horizontalUnit * 7),
  //   Math.floor(horizontalUnit * 9),
  //   Math.floor(horizontalUnit * 11),
  // ];

  // console.log(Math.round(horizontalUnit * 3));

  // const resultAlphabet = ["A", "B", "C", "D", "E", "F"];
  // let result = {
  //   bear: "",
  //   dog: "",
  //   racoon: "",
  //   cat: "",
  //   fox: "",
  //   panda: "",
  // };

  // if (player === "bear") {
  //   const bearResultPosition = Math.floor(position_x);
  //   console.log(Math.floor(position_x));
  //   const bearResult =
  //     resultAlphabet[resultPositions.indexOf(bearResultPosition)];
  //   result.bear = bearResult;
  // } else if (player === "dog") {
  //   const dogResultPosition = Math.floor(position_x);
  //   console.log(Math.floor(position_x));
  //   const dogResult =
  //     resultAlphabet[resultPositions.indexOf(dogResultPosition)];
  //   result.dog = dogResult;
  // } else if (player === "racoon") {
  //   const racoonResultPosition = Math.floor(position_x);
  //   console.log(Math.floor(position_x));
  //   const racoonResult =
  //     resultAlphabet[resultPositions.indexOf(racoonResultPosition)];
  //   result.racoon = racoonResult;
  // } else if (player === "cat") {
  //   const catResultPosition = Math.floor(position_x);
  //   const catResult =
  //     resultAlphabet[resultPositions.indexOf(catResultPosition)];
  //   result.cat = catResult;
  // } else if (player === "fox") {
  //   const foxResultPosition = Math.round(position_x);
  //   const foxResult =
  //     resultAlphabet[resultPositions.indexOf(foxResultPosition)];
  //   result.fox = foxResult;
  // } else if (player === "panda") {
  //   const pandaResultPosition = Math.floor(position_x);
  //   const pandaResult =
  //     resultAlphabet[resultPositions.indexOf(pandaResultPosition)];
  //   result.panda = pandaResult;
  // }
};
