
import React from 'react';

const App = () =>{

  let time = new Date().toLocaleTimeString();

  return(
    <>
    <h1>{time}</h1>
    </>
  )
}

export default App;