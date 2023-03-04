
import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage'

function App() {
  return (
    <div className='main-page'>
      <NavBar/>
      <HomePage/>
    </div>
  )
}

export default App