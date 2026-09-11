import "./Jobs.css"
import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Mainnav from '../../Components/Mainnav/Mainnav'
import PopularWorks from '../../Components/PopularWorks/PopularWorks'
import Chooseus from '../../Components/Chooseus/Chooseus'
import Scroll from '../../Components/Scroll/Scroll'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Job from "../../Components/Jobs/job"
import jobimage from "../../assets/job.jpeg"


function Jobs() {
  return (
    <>
   
  <div className='jobshero'> 

    <Mainnav/>

<div className="jobimage">
    <img src={jobimage} alt="imagepro" height="300px" width="100%"/>

    <h1>Find the Right job<br/>for <span>Your Skills </span></h1>
    <p>Connecting skilled workers with the right opportunities </p>
</div>
    
    <div className="jobsearchp">
    <SearchBar/>
    </div>

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
