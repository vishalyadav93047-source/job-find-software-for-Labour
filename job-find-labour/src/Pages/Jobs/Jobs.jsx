import "./Jobs.css"
import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Mainnav from '../../Components/Mainnav/Mainnav'
import PopularWorks from '../../Components/PopularWorks/PopularWorks'
import Chooseus from '../../Components/Chooseus/Chooseus'
import Scroll from '../../Components/Scroll/Scroll'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Job from "../../Components/Jobs/Job"

function Jobs() {
  return (
    <>
   
  <div className='jobshero'> 
    <Mainnav/>
    <SearchBar/>
    <Job/>
    <Scroll/>

    <PopularWorks/>
    <Chooseus/>
    <Footer/>

  </div>
    

    
    </>
  )
}

export default Jobs
