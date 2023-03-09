import React from "react";
import '../App.css';

function Layout() {
  return (
    <>
      <div className="calci_layout">
        <div className="calci_output">
          <div className="prev_output"></div>
          <div className="curr_output"></div>
        </div>
        <div className="calci_input">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>DEL</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>-</button>
          <button>.</button>
          <button>0</button>
          <button>/</button>
          <button>*</button>
          <button>RESET</button>
          <button> =</button>
        </div>
      </div>
    </>
  );
}

export default Layout;
