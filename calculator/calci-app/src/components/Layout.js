import React, { useState } from "react";
import "../App.css";

function Layout() {

  const [val , setCurrval] = useState("");

  const handleclick = (e) =>{
    setCurrval(val.concat(e.target.name));
  }

  const reset = () =>{
    setCurrval("");
  }

  const totalResult = () =>{
    try{
      setCurrval(eval(val).toString());
    }
    catch(err)
    {
      setCurrval('Error');
    }
  }

  const backspace = () =>{
    setCurrval(val.slice(0 , -1));
  }

  return (
    <div className="calculator">
      <form className="calculator-display">
         <input type="text" value={val} />
      </form>
      <div className="calculator-keypad">
        <div className="calculator-keypad-row">
          <button name = "7" onClick={handleclick} className="calculator-key">7</button>
          <button name = "8" onClick={handleclick} className="calculator-key">8</button>
          <button name = "9" onClick={handleclick} className="calculator-key">9</button>
          <button name = ""  onClick={backspace} className="calculator-key">DEL</button>
        </div>
        <div className="calculator-keypad-row">
          <button name = "4" onClick = {handleclick} className="calculator-key">4</button>
          <button name = "5" onClick = {handleclick} className="calculator-key">5</button>
          <button name = "6" onClick = {handleclick} className="calculator-key">6</button>
          <button name = "+" onClick = {handleclick} className="calculator-key">+</button>
        </div>
        <div className="calculator-keypad-row">
          <button name = "1" onClick = {handleclick} className="calculator-key">1</button>
          <button name = "2" onClick = {handleclick} className="calculator-key">2</button>
          <button name = "3" onClick = {handleclick} className="calculator-key">3</button>
          <button name = "-" onClick = {handleclick} className="calculator-key">&ndash;</button>
        </div>
        <div className="calculator-keypad-row">
          <button name="." onClick={handleclick} className="calculator-key">.</button>
          <button name="0" onClick={handleclick} className="calculator-key">0</button>
          <button name="/" onClick={handleclick} className="calculator-key">&divide;</button>
          <button name="*" onClick={handleclick} className="calculator-key">&times;</button>
        </div>
        <div className="calculator-keypad-row">
          <button onClick={reset} className="control-key">RESET</button>
          <button onClick={totalResult} className="control-key">=</button>
        </div>
      </div>
    </div>
  );
}

export default Layout;
