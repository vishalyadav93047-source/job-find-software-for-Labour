import React from 'react'
import "./Mainnav.css"
import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import logoo from "../../assets/logoo.png"
import { Link, Links } from 'react-router-dom';

function Mainnav() {
  return (
    <>
   <nav>
      <img src={logoo} alt="logo" height='180px' />


      <ul className='ul'>
        <Link to={'/'} style={{color:"black", textDecoration:"none"}}><li>Home</li></Link>
        <Link to={'/About'} style={{color:"black", textDecoration:"none"}}><li>About</li></Link>
        <Link to={'/Jobs'} style={{color:"black", textDecoration:"none"}}><li>Jobs</li></Link>
        <Link to={'/Contact'} style={{color:"black", textDecoration:"none"}}><li>Contact</li></Link>
      </ul>

      <label className='phone'><FaPhone /></label>
      <Link to={'/Login'} style={{color:"black", textDecoration:"none"}} ><label className='login'><FaUser />  LogIn</label></Link>


    </nav>
    </>
  )
}

export default Mainnav
