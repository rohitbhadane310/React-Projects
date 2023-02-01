
import React, { useState } from 'react';
import './App.css';

const App = () =>{

  let time = new Date().toLocaleTimeString();

  const [currTime , setcurrTime] = useState(time);

  setInterval(() => {
    let time = new Date().toLocaleTimeString();
    setcurrTime(time);
  }, 1000);


  return(
    <>
    <h1 className='App'>{currTime}</h1>
    </>
  )
}

export default App;