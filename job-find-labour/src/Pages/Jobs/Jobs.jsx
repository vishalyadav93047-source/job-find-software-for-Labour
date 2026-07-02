import "./Jobs.css"
import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Mainnav from '../../Components/Mainnav/Mainnav'
import PopularWorks from '../../Components/PopularWorks/PopularWorks'
import Chooseus from '../../Components/Chooseus/Chooseus'
import Alljobs from '../../Components/Alljobs/Alljobs'
import Scroll from '../../Components/Scroll/Scroll'
import SearchBar from '../../Components/SearchBar/SearchBar'

function Jobs() {
  return (
    <>
   
  <div className='jobshero'> 
    <Mainnav/>
    <SearchBar/>
    <Alljobs/>
    <Scroll/>

    <PopularWorks/>
    <Chooseus/>
    <Footer/>

  </div>
    

    
    </>
  )
}

export default Jobs
