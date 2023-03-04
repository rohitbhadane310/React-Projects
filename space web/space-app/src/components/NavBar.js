import React, { useState } from 'react'
import SignupForm from "./SignUpForm"
import logo from '../img/logo.png'
import '../App.css'

function NavBar() {

  const[showPopup , setShowPopup] = useState(false);

  const handleSignupClick = () =>{
    setShowPopup (true);
  }

  const handlePopupClose = () =>{
    setShowPopup(false);
  }

  

  return (
    <div className='TopNav'>
        <div className='nav'>
            <div className='links'>
              <img src={logo} height="70px" alt='logo' />
              <ul>
                <a href="/">Home</a>
                <a href="/">Courses</a>
                <a href="/">Blogs</a>
                <a href="/">Materials</a>
                <a href="/">Team</a>
                <a href="/">TSS Niser</a>
                <a href="/">Contact Us</a>
              </ul>
            </div>
            <div className='icons'>
                 { showPopup ? (
                  <SignupForm onClose={handlePopupClose} />
                 ):(
                  <button className='mybtn' onClick={handleSignupClick}>Sign Up</button>
                 )}
            </div>
        </div>
    </div>
  )
}

export default NavBar