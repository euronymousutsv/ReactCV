import { useState } from "react";
const useCustomHooks = (initialState) => {
  const [test, setTest] = useState(initialState);
  const [secondVariable, setSecondVariable] = useState(initialState);
  return [secondVariable, setSecondVariable, test, setTest];
}; //Simple Customs Hook

export default useCustomHooks;
