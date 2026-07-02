import React from 'react'
import "./Platform.css"
import imagepro from "../../assets/imagepro.png"
import {Link} from "react-router-dom"

function Platform() {
  return (
    <>
    <div className='plstform'>
            <img src={imagepro} alt="imagepro" height="300px" width="100%"/>

           
    
    <div className='plstformtext'></div>
            <div className='plstformtext1'>
              <h1>Find Skilled Labour</h1>
              <h2>AnyTime, AnyWhere</h2>
              <p>Connect with trusted employers and find the<br/> right jobOpportunities across the country.</p>
            </div>
            
            <div className='plstformbutton'>
              <Link to={'/JobFinder'} style={{color:"black", textDecoration:"none"}}> <button className='button1'>💼Find Jobs</button></Link>
              
             <Link to={'/Alljobs'} style={{color:"black", textDecoration:"none"}}> <button className='button2'>👷Hire Workers</button></Link>
            </div>
      </div>
    
    </>
  )
}

export default Platform
