import React from 'react'
import IMG2 from'../../asetss/vector2.jpg';
import './header.css'
const Header = () => {
  return (
  <div className='header__container'>
    
    <h2>Learn coding Web and Mobile Applications Smartly</h2>
    
    <img src={IMG2} alt="" width={400}/>
   
    <div className='header__container-button'>
      
    </div>
  </div>
  )
}

export default Header