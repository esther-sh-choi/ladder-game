export const animatedLine = (ctx, w, h, numPlayer, ladderCtx, player) => {
  const horizontalUnit = w / (numPlayer * 2);
  const verticalUnit = h / 9;
  let index;
  let position_x;
  let position_y = 0;

  if (player === "bear") {
    ctx.strokeStyle = "#f5c000";
    position_x = horizontalUnit;
    index = 0;
  } else if (player === "dog") {
    ctx.strokeStyle = "#1a81ff";
    position_x = horizontalUnit * 3;
    index = 1;
  } else if (player === "racoon") {
    ctx.strokeStyle = "#00c281";
    position_x = horizontalUnit * 5;
    index = 2;
  } else if (player === "cat") {
    ctx.strokeStyle = "#ff5797";
    position_x = horizontalUnit * 7;
    index = 3;
  } else if (player === "fox") {
    ctx.strokeStyle = "#443dff";
    position_x = horizontalUnit * 9;
    index = 4;
  } else if (player === "panda") {
    ctx.strokeStyle = "#85ff47";
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

      for (let j = 0; j < 20; j++) {
        const x = pt0.x + dx * (j / 20);
        const y = pt0.y + dy * (j / 20);
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

  const animate = () => {
    if (t < points.length - 1) {
      requestAnimationFrame(animate);
    }

    ctx.beginPath();
    ctx.moveTo(points[t - 1].x, points[t - 1].y);
    ctx.lineTo(points[t].x, points[t].y);
    ctx.stroke();

    t++;
  };

  animate();
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
