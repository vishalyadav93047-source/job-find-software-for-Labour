import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Mainnav from '../../Components/Mainnav/Mainnav'
import Job from '../../Components/Jobs/job'
import PopularWorks from '../../Components/PopularWorks/PopularWorks'
import Scroll from '../../Components/Scroll/Scroll'
import Chooseus from '../../Components/Chooseus/Chooseus'

function Jobs() {
  return (
    <>
   

    <Mainnav/>
    <Job/>
    <Scroll/>

    <PopularWorks/>
    <Chooseus/>
    <Footer/>

    
    </>
  )
}

export default Jobs
