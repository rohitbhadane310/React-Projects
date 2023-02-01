
import React, { useState } from 'react';
import './App.css';

const App = () =>{

  let time = new Date().toLocaleTimeString();

  const [currTime , setcurrTime] = useState(time);

  const updateTime = () =>{
    let time = new Date().toLocaleTimeString();
    setcurrTime(time);
  }


  return(
    <>
    <h1 className='App'>{currTime}</h1>
    <button className='btn' onClick={updateTime}>get Time</button>
    </>
  )
}

export default App;