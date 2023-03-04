import React from 'react'
import img1 from '../img/img1.gif'
import moon from '../img/moon.png'
import '../App.css'

function HomePage() {
  return (
    <div className='home-page'>
       <div className='left'>
        <h1>SciAstra</h1>
        <div className='inside-left'>
            <img src={img1} height="100px" alt='logo' style={{borderRadius: "5px"}} />
            <h3>For the love of science</h3>
        </div>
        <p>The science is the most important part of our life</p>
        <button className='Homebtn'>Get your free material here</button>
       </div>
       <div className='right'>
             <img className='homeImg' src={moon} alt='logo' />
       </div>
    </div>
  )
}

export default HomePage