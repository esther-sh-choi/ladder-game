import { createContext, useState } from "react";

//initial values
const LadderContext = createContext({
  generateLadder: (numPlayer) => {},
});

export const LadderContextProvider = (props) => {
  const [numPlayer, setNumPlayer] = useState(
    JSON.parse(localStorage.getItem("playerNum"))
  );

  const generateLadderHandler = (playerNum) => {
    setNumPlayer(playerNum);

    let stop = false;
    let blankLadder = [];
    let resultLetters = [];
    do {
      blankLadder = [];
      for (let a = 0; a < 10; a++) {
        let ladderRow = [];
        for (let b = 0; b < playerNum * 2 - 1; b++) {
          if (a === 0 || a === 9) {
            if (b % 2 === 0) {
              ladderRow.push(1);
            } else if (b % 2 === 1) {
              ladderRow.push(0);
            }
          } else {
            if (b === 0 || b % 2 === 0) {
              ladderRow.push(1);
            } else if (b % 2 === 1) {
              ladderRow.push(Math.round(Math.random()));
            }
          }

          if (ladderRow[b - 2] === 1 && b % 2 === 1 && b > 1) {
            ladderRow.splice(b, 1, 0);
          } else if (
            ladderRow[b + 2] === 1 &&
            b % 2 === 1 &&
            b !== numPlayer * 2 - 3
          ) {
            ladderRow.splice(b, 1, 0);
          }
        }

        if (
          a !== 0 &&
          a !== 9 &&
          playerNum !== 2 &&
          ladderRow
            .filter((item, i) => i % 2 === 1)
            .reduce((acc, cur) => acc + cur, 0) === 0
        ) {
          // When there are no horizontal ladders in the row, add one at the end
          ladderRow.splice(playerNum * 2 - 3, 1, 1);
        }

        blankLadder.push(ladderRow);
      }

      // Array of number of horizontal ladder in each column
      let horizontalLadderCount = [];
      for (let i = 1; i < playerNum * 2 - 2; i = i + 2) {
        horizontalLadderCount.push(
          blankLadder
            .map((ladderRow) => ladderRow[i])
            .filter((item) => item === 1).length
        );
      }

      if (
        playerNum !== 2 &&
        horizontalLadderCount.filter((item) => item > 2).length ===
          horizontalLadderCount.length
      ) {
        stop = true;
      } else if (
        playerNum === 2 &&
        horizontalLadderCount.filter((item) => item > 4).length ===
          horizontalLadderCount.length
      ) {
        stop = true;
      }
    } while (stop === false);

    localStorage.setItem("ladderArr", JSON.stringify(blankLadder));

    const ladderArr = JSON.parse(localStorage.getItem("ladderArr"));

    let current_x = [0, 2, 4, 6, 8, 10];

    let pathX = [];
    for (let x = 0; x < playerNum; x++) {
      let moveX = [];
      let moveY = [];
      for (let y = 1; y < 9; y++) {
        let current_y = y;

        if (current_x[x] >= 2 && ladderArr[current_y][current_x[x] - 1] === 0) {
          if (
            current_x[x] < playerNum * 2 - 2 &&
            ladderArr[current_y][current_x[x] + 1] === 0
          ) {
            moveX.push(0);
            moveY.push(current_y);
          } else if (
            current_x[x] < playerNum * 2 - 2 &&
            ladderArr[current_y][current_x[x] + 1] === 1
          ) {
            current_x[x] += 2;

            moveX.push(2);
            moveY.push(current_y);
          } else if (current_x[x] === playerNum * 2 - 2) {
            moveX.push(0);
            moveY.push(current_y);
          }
        } else if (
          current_x[x] >= 2 &&
          ladderArr[current_y][current_x[x] - 1] === 1
        ) {
          current_x[x] -= 2;

          moveX.push(-2);
          moveY.push(current_y);
        } else if (
          current_x[x] === 0 &&
          ladderArr[current_y][current_x[x] + 1] === 0
        ) {
          moveX.push(0);
          moveY.push(current_y);
        } else if (
          current_x[x] === 0 &&
          ladderArr[current_y][current_x[x] + 1] === 1
        ) {
          current_x[x] += 2;

          moveX.push(2);
          moveY.push(current_y);
        }
      }
      pathX.push(moveX);
    }

    localStorage.setItem("ladderPath", JSON.stringify(pathX));

    let pathResult = pathX
      .map((moveX) => moveX.reduce((acc, cur) => acc + cur, 0))
      .map((resultPosition, i) => resultPosition + i * 2);

    for (let i = 0; i < playerNum; i++) {
      if (pathResult[i] === 0) {
        resultLetters.push("A");
      } else if (pathResult[i] === 2) {
        resultLetters.push("B");
      } else if (pathResult[i] === 4) {
        resultLetters.push("C");
      } else if (pathResult[i] === 6) {
        resultLetters.push("D");
      } else if (pathResult[i] === 8) {
        resultLetters.push("E");
      } else if (pathResult[i] === 10) {
        resultLetters.push("F");
      }
    }

    localStorage.setItem("resultLetters", JSON.stringify(resultLetters));
  };

  const context = {
    generateLadder: generateLadderHandler,
  };

  return (
    <LadderContext.Provider value={context}>
      {props.children}
    </LadderContext.Provider>
  );
};

export default LadderContext;
