import React, { useState, createContext } from "react";
export const CalContext = createContext();

function CalculatorContextProvider(props) {
  const [result, setResult] = useState("");
  const [calc, setCalc] = useState("");
  const operators = ["/", "÷", "x", "+", "-", ".", "%"];
  const updateCal = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };
  const equalTo = () => {
    setCalc(eval(calc).toString());
  };
  const deletLast = () => {
    if (calc === "") {
      return;
    }
    const deletValue = calc.slice(0, -1);
    setCalc(deletValue);
  };
  return (
    <CalContext.Provider
      value={{
        result,
        setResult,
        calc,
        setCalc,
        updateCal,
        equalTo,
        deletLast,
      }}>
      {props.children}
    </CalContext.Provider>
  );
}

export default CalculatorContextProvider;
