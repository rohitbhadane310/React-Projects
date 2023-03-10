import React from "react";
import "../App.css";

function Layout() {
  return (
    <div className="calculator">
      <div className="calculator-display"></div>
      <div className="calculator-keypad">
        <div className="calculator-keypad-row">
          <button className="calculator-key">7</button>
          <button className="calculator-key">8</button>
          <button className="calculator-key">9</button>
          <button className="calculator-key">DEL</button>
        </div>
        <div className="calculator-keypad-row">
          <button className="calculator-key">4</button>
          <button className="calculator-key">5</button>
          <button className="calculator-key">6</button>
          <button className="calculator-key">+</button>
        </div>
        <div className="calculator-keypad-row">
          <button className="calculator-key">1</button>
          <button className="calculator-key">2</button>
          <button className="calculator-key">3</button>
          <button className="calculator-key">-</button>
        </div>
        <div className="calculator-keypad-row">
          <button className="calculator-key">.</button>
          <button className="calculator-key">0</button>
          <button className="calculator-key">/</button>
          <button className="calculator-key">*</button>
        </div>
        <div className="calculator-keypad-row">
          <button className="control-key">RESET</button>
          <button className="control-key">=</button>
        </div>
      </div>
    </div>
  );
}

export default Layout;
