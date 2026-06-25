import React from 'react'
import "./Platform.css"
import imagepro from "../assets/imagepro.png";

function Platform() {
  return (
    <>
    <div className='plstform'>
            <img src={imagepro} alt="imagepro" height="300px" width="100%"/>

           
    </div>
    <div className='plstformtext'>
            <div className='plstformtext1'>
              <h1>Find Skilled Labour</h1>
              <h2>AnyTime, AnyWhere</h2>
              <p>Connect with trusted employers and find the right job<br/>Opportunities across the country.</p>
            </div>
            
            <div className='plstformbutton'>
              <button className='button1'>💼Find Jobs</button>
              
              <button className='button2'>👷Hire Workers</button>
            </div>
      </div>
    
    </>
  )
}

export default Platform
