import React from 'react'
import "./Home.css"
import Platform from '../../Components/Platform/Platform'
import Scroll from '../../Components/Scroll/Scroll'
import Job from '../../Components/Jobs/job'
import SearchBar from '../../Components/SearchBar/SearchBar'
import HowItWorks from '../../Components/HowItWork/HowitWork'
import PopularWorks from '../../Components/PopularWorks/PopularWorks'
import Chooseus from '../../Components/Chooseus/Chooseus'
import Stats from '../../Components/Stats/Stats'
import Mainnav from '../../Components/Mainnav/Mainnav'
import Footer from '../../Components/Footer/Footer'



function Home() {
  return (
    <>
    <div className='hero'>

   <Mainnav/>
   <Platform/>
   <SearchBar/>
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

export default Home
