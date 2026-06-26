import React from 'react'
import "./Mainnav.css"
import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import logoo from "../../assets/logoo.png"

function Mainnav() {
  return (
    <>
   <nav>
      <img src={logoo} alt="logo" height='180px' />


      <ul className='ul'>
        <li>Home</li>
        <li>About Us</li>
        <li>Jobs</li>
        <li>Contact</li>
      </ul>

      <label className='phone'><FaPhone /></label>
      <label className='login'><FaUser />  LogIn</label>


    </nav>
    </>
  )
}

export default Mainnav
