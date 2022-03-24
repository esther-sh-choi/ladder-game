import { createContext, useState, useEffect } from "react";

//initial values
const LadderContext = createContext({
  ladder: [],
  setNumPlayer: (num) => {},
  generateLadder: (numPlayer) => {},
});

export const LadderContextProvider = (props) => {
  const [ladderArr, setLadderArr] = useState([]);
  const [numPlayer, setNumPlayer] = useState();
  const [pathX, setPathX] = useState([]);
  const [resultLetters, setResultLetters] = useState([]);

  useEffect(() => {
    console.log(ladderArr);

    let current_x = [0, 2, 4, 6, 8, 10];

    if (ladderArr.length > 0) {
      let pathX = [];
      for (let x = 0; x < numPlayer; x++) {
        let moveX = [];
        let moveY = [];
        for (let y = 1; y < 9; y++) {
          let current_y = y;

          if (
            current_x[x] >= 2 &&
            ladderArr[current_y][current_x[x] - 1] === 0
          ) {
            if (
              current_x[x] < numPlayer * 2 - 2 &&
              ladderArr[current_y][current_x[x] + 1] === 0
            ) {
              moveX.push(0);
              moveY.push(current_y);
            } else if (
              current_x[x] < numPlayer * 2 - 2 &&
              ladderArr[current_y][current_x[x] + 1] === 1
            ) {
              current_x[x] += 2;

              moveX.push(2);
              moveY.push(current_y);
            } else if (current_x[x] === numPlayer * 2 - 2) {
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
        console.log(moveX);
        console.log(moveY);
        pathX.push(moveX);
      }
      console.log(pathX);
      setPathX(pathX);

      let pathResult = pathX
        .map((moveX) => moveX.reduce((acc, cur) => acc + cur, 0))
        .map((resultPosition, i) => resultPosition + i * 2);

      console.log(pathResult);

      let resultLetters = [];

      for (let i = 0; i < numPlayer; i++) {
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

      setResultLetters(resultLetters);
    }
  }, [numPlayer, ladderArr]);

  const generateLadderHandler = (numPlayer) => {
    setNumPlayer(numPlayer);
    let stop = false;
    let blankLadder = [];
    do {
      blankLadder = [];
      for (let a = 0; a < 10; a++) {
        let ladderRow = [];
        for (let b = 0; b < numPlayer * 2 - 1; b++) {
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
          numPlayer !== 2 &&
          ladderRow
            .filter((item, i) => i % 2 === 1)
            .reduce((acc, cur) => acc + cur, 0) === 0
        ) {
          // When there are no horizontal ladders in the row, add one at the end
          ladderRow.splice(numPlayer * 2 - 3, 1, 1);
        }

        blankLadder.push(ladderRow);
      }

      // Array of number of horizontal ladder in each column
      let horizontalLadderCount = [];
      for (let i = 1; i < numPlayer * 2 - 2; i = i + 2) {
        horizontalLadderCount.push(
          blankLadder
            .map((ladderRow) => ladderRow[i])
            .filter((item) => item === 1).length
        );
      }

      if (
        numPlayer !== 2 &&
        horizontalLadderCount.filter((item) => item > 2).length ===
          horizontalLadderCount.length
      ) {
        stop = true;
      } else if (
        numPlayer === 2 &&
        horizontalLadderCount.filter((item) => item > 4).length ===
          horizontalLadderCount.length
      ) {
        stop = true;
      }
    } while (stop === false);

    console.log(blankLadder);
    setLadderArr(blankLadder);
  };

  //updated context
  const context = {
    ladderArr: ladderArr,
    pathX: pathX,
    resultLetters: resultLetters,
    generateLadder: generateLadderHandler,
  };

  return (
    <LadderContext.Provider value={context}>
      {props.children}
    </LadderContext.Provider>
  );
};

export default LadderContext;
