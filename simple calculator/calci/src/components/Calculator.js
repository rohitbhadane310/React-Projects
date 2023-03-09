import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);

  function inputDigit(digit) {
    if (waitingForSecondValue) {
      setDisplayValue(digit);
      setWaitingForSecondValue(false);
    } else {
      setDisplayValue(displayValue === "0" ? digit : displayValue + digit);
    }
  }

  function inputDecimal() {
    if (waitingForSecondValue) {
      setDisplayValue("0.");
      setWaitingForSecondValue(false);
    } else if (displayValue.indexOf(".") === -1) {
      setDisplayValue(displayValue + ".");
    }
  }

  function clearDisplay() {
    setDisplayValue("0");
    setFirstValue(null);
    setOperator(null);
    setWaitingForSecondValue(false);
  }

  function handleOperator(nextOperator) {
    const inputValue = parseFloat(displayValue);

    if (firstValue === null) {
      setFirstValue(inputValue);
    } else if (operator) {
      const result = performCalculation[operator](firstValue, inputValue);
      setDisplayValue(String(result));
      setFirstValue(result);
    }

    setWaitingForSecondValue(true);
    setOperator(nextOperator);
  }

  const performCalculation = {
    "/": (firstValue, secondValue) => firstValue / secondValue,
    "*": (firstValue, secondValue) => firstValue * secondValue,
    "+": (firstValue, secondValue) => firstValue + secondValue,
    "-": (firstValue, secondValue) => firstValue - secondValue,
    "=": (firstValue, secondValue) => secondValue,
  };

  return (
    <div className="calculator">
      <div className="calculator-display">{displayValue}</div>
      <div className="calculator-keypad">
        <div className="calculator-keypad-row">
          <button className="calculator-key" onClick={clearDisplay}>
            C
          </button>
          <button className="calculator-key" onClick={() => handleOperator("/")}>
            ÷
          </button>
        </div>
        <div className="calculator-keypad-row">
          <button className="calculator-key" onClick={() => inputDigit(7)}>
            7
          </button>
          <button className="calculator-key" onClick={() => inputDigit(8)}>
            8
          </button>
          <button className="calculator-key" onClick={() => inputDigit(9)}>
            9
          </button>
          <button className="calculator-key" onClick={() => handleOperator("*")}>
            ×
          </button>
        </div>
        <div className="calculator-keypad-row">
          <button className="calculator-key" onClick={() => inputDigit(4)}>
            4
          </button>
          <button className="calculator-key" onClick={() => inputDigit(5)}>
            5
          </button>
          <button className="calculator-key" onClick={() => inputDigit(6)}>
            6
          </button>
          <button className="calculator-key" onClick={() => handleOperator("-")}>
            −
          </button>
        </div>
        <div className="calculator-keypad-row">
          <button className="calculator-key" onClick={() => inputDigit(1)}>
            1
          </button>
        </div>
     </div>
    </div>
  )
}

export default Calculator;