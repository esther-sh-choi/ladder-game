export const animatedLine = (ctx, w, h, numPlayer, ladderCtx, player) => {
  const horizontalUnit = w / (numPlayer * 2);
  const verticalUnit = h / 9;
  let index;
  let position_x;
  let position_y = 0;

  if (player === "bear") {
    position_x = horizontalUnit;
    index = 0;
  } else if (player === "dog") {
    position_x = horizontalUnit * 3;
    index = 1;
  } else if (player === "racoon") {
    position_x = horizontalUnit * 5;
    index = 2;
  } else if (player === "cat") {
    position_x = horizontalUnit * 7;
    index = 3;
  } else if (player === "fox") {
    position_x = horizontalUnit * 9;
    index = 4;
  } else if (player === "panda") {
    position_x = horizontalUnit * 11;
    index = 5;
  }

  const moveX = ladderCtx.pathX[index].slice();
  moveX.unshift(0);
  console.log(moveX);

  ctx.lineWidth = 7.5;

  let vertices = [];

  vertices.push({ x: position_x, y: position_y });
  for (let i = 0; i < 10; i++) {
    if (moveX[i] === 0) {
      // move down one unit

      position_y += verticalUnit;
      vertices.push({ x: position_x, y: position_y });
    } else if (moveX[i] === 2) {
      // move right 2 units and down 1 unit
      position_x += horizontalUnit * 2;
      vertices.push({ x: position_x, y: position_y });
      position_y += verticalUnit;
      vertices.push({ x: position_x, y: position_y });
    } else if (moveX[i] === -2) {
      // move left 2 units and down 1 unit

      position_x -= horizontalUnit * 2;
      vertices.push({ x: position_x, y: position_y });
      position_y += verticalUnit;
      vertices.push({ x: position_x, y: position_y });
    }
  }

  console.log(vertices);
  const calcWaypoints = (vertices) => {
    let waypoints = [];
    for (let i = 1; i < vertices.length; i++) {
      const pt0 = vertices[i - 1];
      const pt1 = vertices[i];
      const dx = pt1.x - pt0.x;
      const dy = pt1.y - pt0.y;

      for (let j = 0; j < 15; j++) {
        const x = pt0.x + dx * (j / 15);
        const y = pt0.y + dy * (j / 15);
        waypoints.push({ x: x, y: y });
      }
    }
    return waypoints;
  };

  // calculate incremental points
  const points = calcWaypoints(vertices);

  // variable for how many frames elapsed in the animation
  // t represents each waypoint along the path
  let t = 1;

  const animateBear = () => {
    ctx.strokeStyle = "#f5c000";

    if (t < points.length - 1) {
      requestAnimationFrame(animateBear);
    }

    ctx.beginPath();
    ctx.moveTo(points[t - 1].x, points[t - 1].y);
    ctx.lineTo(points[t].x, points[t].y);
    ctx.stroke();

    t++;

    // if (
    //   points[t].x === vertices[vertices.length - 1].x &&
    //   points[t].y === vertices[vertices.length - 1].y
    // ) {
    //   done = true;
    // }
  };

  const animateDog = () => {
    ctx.strokeStyle = "#1a81ff";

    if (t < points.length - 1) {
      requestAnimationFrame(animateDog);
    }

    ctx.beginPath();
    ctx.moveTo(points[t - 1].x, points[t - 1].y);
    ctx.lineTo(points[t].x, points[t].y);
    ctx.stroke();

    t++;
  };

  const animateRacoon = () => {
    ctx.strokeStyle = "#00c281";

    if (t < points.length - 1) {
      requestAnimationFrame(animateRacoon);
    }

    ctx.beginPath();
    ctx.moveTo(points[t - 1].x, points[t - 1].y);
    ctx.lineTo(points[t].x, points[t].y);
    ctx.stroke();

    t++;
  };

  const animateCat = () => {
    ctx.strokeStyle = "#ff5797";

    if (t < points.length - 1) {
      requestAnimationFrame(animateCat);
    }

    ctx.beginPath();
    ctx.moveTo(points[t - 1].x, points[t - 1].y);
    ctx.lineTo(points[t].x, points[t].y);
    ctx.stroke();

    t++;
  };

  const animateFox = () => {
    ctx.strokeStyle = "#443dff";

    if (t < points.length - 1) {
      requestAnimationFrame(animateFox);
    }

    ctx.beginPath();
    ctx.moveTo(points[t - 1].x, points[t - 1].y);
    ctx.lineTo(points[t].x, points[t].y);
    ctx.stroke();

    t++;
  };

  const animatePanda = () => {
    ctx.strokeStyle = "#85ff47";

    if (t < points.length - 1) {
      requestAnimationFrame(animatePanda);
    }

    ctx.beginPath();
    ctx.moveTo(points[t - 1].x, points[t - 1].y);
    ctx.lineTo(points[t].x, points[t].y);
    ctx.stroke();

    t++;
  };

  if (player === "bear") {
    animateBear();
  } else if (player === "dog") {
    animateDog();
  } else if (player === "racoon") {
    animateRacoon();
  } else if (player === "cat") {
    animateCat();
  } else if (player === "fox") {
    animateFox();
  } else if (player === "panda") {
    animatePanda();
  }
};

// ctx.beginPath();
//   for (let i = 0; i < 10; i++) {
//     if (moveX[i] === 0) {
//       // move down one unit
//       ctx.moveTo(position_x, position_y);
//       position_y += verticalUnit;
//       ctx.lineTo(position_x, position_y);
//     } else if (moveX[i] === 2) {
//       // move right 2 units and down 1 unit

//       ctx.moveTo(position_x, position_y);
//       position_x += horizontalUnit * 2;
//       ctx.lineTo(position_x, position_y);
//       position_y += verticalUnit;
//       ctx.lineTo(position_x, position_y);
//     } else if (moveX[i] === -2) {
//       // move left 2 units and down 1 unit

//       ctx.moveTo(position_x, position_y);
//       position_x -= horizontalUnit * 2;
//       ctx.lineTo(position_x, position_y);
//       position_y += verticalUnit;
//       ctx.lineTo(position_x, position_y);
//     }
//   }
//   ctx.stroke();
