import React from 'react'
import logo from '../img/logo.png'
import '../App.css'

function NavBar() {
  return (
    <div className='TopNav'>
        <div className='nav'>
            <div className='links'>
              <img src={logo} height="40px" alt='logo' />
              <ul>
                <a href="/">Home</a>
                <a href="/">about</a>
                <a href="/">section</a>
                <a href="/">contact</a>
              </ul>
            </div>
            <div className='icons'>
              <button className='mybtn'>sign up</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar