import { createContext } from "react";

const OptionsContext = createContext([]);

export const OptionsContextProvider = (props) => {
  const saveOptionsHandler = (optionsArr) => {
    localStorage.setItem("options", JSON.stringify(optionsArr));
  };

  const context = {
    saveOptions: saveOptionsHandler,
  };

  return (
    <OptionsContext.Provider value={context}>
      {props.children}
    </OptionsContext.Provider>
  );
};

export default OptionsContext;
