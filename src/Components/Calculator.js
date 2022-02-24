import React, { useContext } from "react";
import { CalContext } from "./CalculatorContext";

function Calculator() {
  const { result, setResult, calc, setCalc, updateCal, equalTo, deletLast } =
    useContext(CalContext);
  return (
    <div className="calculator-body">
      <div className="display">
        <div className="top-display">{result ? <span>{result}</span> : ""}</div>
        <div className="bottom-display">{calc || "0"}</div>
      </div>
      <div className="buttons-grid">
        <button
          className="specialKeys"
          onClick={() => {
            setCalc("");
            setResult("");
          }}>
          AC
        </button>
        <button className="specialKeys" onClick={deletLast}>
          C
        </button>
        <button className="specialKeys" onClick={() => updateCal("%")}>
          %
        </button>
        <button className="specialKeys" onClick={() => updateCal("÷")}>
          ÷
        </button>
        <button onClick={() => updateCal("7")}>7</button>
        <button onClick={() => updateCal("8")}>8</button>
        <button onClick={() => updateCal("9")}>9</button>
        <button className="specialKeys" onClick={() => updateCal("*")}>
          x
        </button>
        <button onClick={() => updateCal("4")}>4</button>
        <button onClick={() => updateCal("5")}>5</button>
        <button onClick={() => updateCal("6")}>6</button>
        <button className="specialKeys" onClick={() => updateCal("-")}>
          -
        </button>
        <button onClick={() => updateCal("1")}>1</button>
        <button onClick={() => updateCal("2")}>2</button>
        <button onClick={() => updateCal("3")}>3</button>
        <button className="specialKeys" onClick={() => updateCal("+")}>
          +
        </button>
        <button onClick={() => updateCal("0")}>0</button>
        <button onClick={() => updateCal(".")}>.</button>
        <button className="equalTo" onClick={equalTo}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
