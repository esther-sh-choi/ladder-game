import { createContext, useState } from "react";

//initial values
const LadderContext = createContext({
  ladderTwo: [],
  ladderThree: [],
  ladderFour: [],
  ladderFive: [],
  ladderSix: [],
  updateLadderArr: (numPlayer) => {},
});

export const LadderContextProvider = (props) => {
  const [ladderArr, setLadderArr] = useState([]);

  const generateLadderTwoHandler = (ladderArr) => {
    let newArr = ladderArr.slice();

    let stop = false;
    do {
      for (let i = 1; i < 9; i++) {
        newArr[i].splice(1, 1, Math.round(Math.random()));
      }
      const numHorizontalLadder = newArr.filter((arr) => arr[1] === 1).length;
      if (numHorizontalLadder > 4) {
        stop = true;
      }
    } while (stop === false);

    console.log(newArr);
    setLadderArr(newArr);
  };

  const generateLadderThreeHandler = (ladderArr) => {
    let newArr = ladderArr.slice();
    let stop = false;
    do {
      for (let i = 1; i < 9; i++) {
        newArr[i].splice(1, 1, Math.round(Math.random()));
        if (newArr[i][1] === 1) {
          newArr[i].splice(3, 1, 0);
        } else if (newArr[i][1] === 0) {
          newArr[i].splice(3, 1, Math.round(Math.random()));
        }
      }
      const numHorizontalLadder_A = newArr.filter((arr) => arr[1] === 1).length;
      const numHorizontalLadder_B = newArr.filter((arr) => arr[3] === 1).length;
      if (numHorizontalLadder_A > 3 && numHorizontalLadder_B > 3) {
        stop = true;
      }
    } while (stop === false);

    console.log(newArr);
    setLadderArr(newArr);
  };

  const generateLadderFourHandler = (ladderArr) => {
    let newArr = ladderArr.slice();
    let stop = false;
    do {
      for (let i = 1; i < 9; i++) {
        newArr[i].splice(1, 1, Math.round(Math.random()));
        if (newArr[i][1] === 1) {
          newArr[i].splice(3, 1, 0);
        } else if (newArr[i][1] === 0) {
          newArr[i].splice(3, 1, Math.round(Math.random()));
        }

        if (newArr[i][3] === 1) {
          newArr[i].splice(5, 1, 0);
        } else if (newArr[i][3] === 0) {
          newArr[i].splice(5, 1, Math.round(Math.random()));
        } else if (newArr[i][1] === 0 && newArr[i][3] === 0) {
          newArr[i].splice(5, 1, 1);
        }
      }
      const numHorizontalLadder_A = newArr.filter((arr) => arr[1] === 1).length;
      const numHorizontalLadder_B = newArr.filter((arr) => arr[3] === 1).length;
      const numHorizontalLadder_C = newArr.filter((arr) => arr[5] === 1).length;
      if (
        numHorizontalLadder_A > 1 &&
        numHorizontalLadder_B > 1 &&
        numHorizontalLadder_C > 1
      ) {
        stop = true;
      }
    } while (stop === false);

    console.log(newArr);
    setLadderArr(newArr);
  };

  const generateLadderFiveHandler = (ladderArr) => {
    let newArr = ladderArr.slice();
    let stop = false;
    do {
      for (let i = 1; i < 9; i++) {
        newArr[i].splice(1, 1, Math.round(Math.random()));
        if (newArr[i][1] === 1) {
          newArr[i].splice(3, 1, 0);
        } else if (newArr[i][1] === 0) {
          newArr[i].splice(3, 1, Math.round(Math.random()));
        }

        if (newArr[i][3] === 1) {
          newArr[i].splice(5, 1, 0);
        } else if (newArr[i][3] === 0) {
          newArr[i].splice(5, 1, Math.round(Math.random()));
        }

        if (newArr[i][5] === 1) {
          newArr[i].splice(7, 1, 0);
        } else if (newArr[i][5] === 0) {
          newArr[i].splice(7, 1, Math.round(Math.random()));
        } else if (
          newArr[i][1] === 0 &&
          newArr[i][3] === 0 &&
          newArr[i][5] === 0
        ) {
          newArr[i].splice(7, 1, 1);
        }
      }
      const numHorizontalLadder_A = newArr.filter((arr) => arr[1] === 1).length;
      const numHorizontalLadder_B = newArr.filter((arr) => arr[3] === 1).length;
      const numHorizontalLadder_C = newArr.filter((arr) => arr[5] === 1).length;
      const numHorizontalLadder_D = newArr.filter((arr) => arr[7] === 1).length;
      if (
        numHorizontalLadder_A > 1 &&
        numHorizontalLadder_B > 1 &&
        numHorizontalLadder_C > 1 &&
        numHorizontalLadder_D > 1
      ) {
        stop = true;
      }
    } while (stop === false);

    setLadderArr(newArr);
  };

  const generateLadderSixHandler = (ladderArr) => {
    let newArr = ladderArr.slice();
    let stop = false;
    do {
      for (let i = 1; i < 9; i++) {
        newArr[i].splice(1, 1, Math.round(Math.random()));
        if (newArr[i][1] === 1) {
          newArr[i].splice(3, 1, 0);
        } else if (newArr[i][1] === 0) {
          newArr[i].splice(3, 1, Math.round(Math.random()));
        }

        if (newArr[i][3] === 1) {
          newArr[i].splice(5, 1, 0);
        } else if (newArr[i][3] === 0) {
          newArr[i].splice(5, 1, Math.round(Math.random()));
        }

        if (newArr[i][5] === 1) {
          newArr[i].splice(7, 1, 0);
        } else if (newArr[i][5] === 0) {
          newArr[i].splice(7, 1, Math.round(Math.random()));
        }

        if (newArr[i][7] === 1) {
          newArr[i].splice(9, 1, 0);
        } else if (newArr[i][7] === 0) {
          newArr[i].splice(9, 1, Math.round(Math.random()));
        } else if (
          newArr[i][1] === 0 &&
          newArr[i][3] === 0 &&
          newArr[i][5] === 0 &&
          newArr[i][7] === 0
        ) {
          newArr[i].splice(9, 1, 1);
        }
      }
      const numHorizontalLadder_A = newArr.filter((arr) => arr[1] === 1).length;
      const numHorizontalLadder_B = newArr.filter((arr) => arr[3] === 1).length;
      const numHorizontalLadder_C = newArr.filter((arr) => arr[5] === 1).length;
      const numHorizontalLadder_D = newArr.filter((arr) => arr[7] === 1).length;
      const numHorizontalLadder_E = newArr.filter((arr) => arr[9] === 1).length;
      if (
        numHorizontalLadder_A > 2 &&
        numHorizontalLadder_B > 2 &&
        numHorizontalLadder_C > 2 &&
        numHorizontalLadder_D > 2 &&
        numHorizontalLadder_E > 2
      ) {
        stop = true;
      }
    } while (stop === false);

    setLadderArr(newArr);
  };
  console.log(ladderArr);

  const storeCoordinatesHandler = () => {};

  //updated context
  const context = {
    ladderArr: ladderArr,
    generateLadderTwo: generateLadderTwoHandler,
    generateLadderThree: generateLadderThreeHandler,
    generateLadderFour: generateLadderFourHandler,
    generateLadderFive: generateLadderFiveHandler,
    generateLadderSix: generateLadderSixHandler,
  };

  return (
    <LadderContext.Provider value={context}>
      {props.children}
    </LadderContext.Provider>
  );
};

export default LadderContext;
