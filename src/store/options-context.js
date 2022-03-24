import { createContext, useState } from "react";

const OptionsContext = createContext([]);

export const OptionsContextProvider = (props) => {
  //update optionscontext
  const [inputOptions, setInputOptions] = useState([]);
  const [results, setResults] = useState([]);

  const saveOptionsHandler = (optionsArr) => {
    setInputOptions((prevState) => [...prevState, ...optionsArr]);
  };

  const saveResultsHandler = (results) => {
    setResults((prev) => prev.concat(results));
  };

  const context = {
    options: inputOptions,
    results: results,
    saveOptions: saveOptionsHandler,
    saveResults: saveResultsHandler,
  };

  return (
    <OptionsContext.Provider value={context}>
      {props.children}
    </OptionsContext.Provider>
  );
};

export default OptionsContext;
