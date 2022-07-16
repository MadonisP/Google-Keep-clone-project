import React from 'react'
import "./footer.css"

var currentTime = new Date();
var year = currentTime.getFullYear();

const Footer = () => {
  return (
    <div className='footer'>
        <p className="cr">copyright @{year}</p>
    </div>
  )
}

export default Footer