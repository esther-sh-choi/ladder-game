import { createContext, useState } from "react";

const OptionsContext = createContext([]);

export const OptionsContextProvider = (props) => {
  //update optionscontext
  const [inputOptions, setInputOptions] = useState([]);

  const saveOptionsHandler = (optionsArr) => {
    setInputOptions((prevState) => [...prevState, ...optionsArr]);
  };

  const context = { options: inputOptions, saveOptions: saveOptionsHandler };

  return (
    <OptionsContext.Provider value={context}>
      {props.children}
    </OptionsContext.Provider>
  );
};

export default OptionsContext;
