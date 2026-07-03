import "./About.css"
import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Mainnav from '../../Components/Mainnav/Mainnav'
import Job from '../../Components/Jobs/job'
import Scroll from '../../Components/Scroll/Scroll'
import PopularWorks from '../../Components/PopularWorks/PopularWorks'
import HowItWorks from '../../Components/HowItWork/HowitWork'
import Stats from '../../Components/Stats/Stats'
import Chooseus from '../../Components/Chooseus/Chooseus'
import Introduction from "../../Components/Introduction/Introduction"

function About() {
  return (
    <>
    
  <div className='abouthero'>
    <Mainnav/>
    <Introduction/>
    <Job/>
    <Scroll/>
    <PopularWorks/>
    <HowItWorks/>
    <Chooseus/>
    <Stats/>
    <Footer/>

  </div>

   
    </>
  )
}

export default About
