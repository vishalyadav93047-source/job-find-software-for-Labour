import React from 'react'
import "./Home.css"
import Mainnav from '../../Components/Mainnav/Mainnav'
import Platform from '../../Components/Platform/Platform'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Job from '../../Components/Jobs/job'
import Scroll from '../../Components/Scroll/Scroll'
import PopularWorks from '../../Components/PopularWorks/PopularWorks'
import Stats from '../../Components/Stats/Stats'
import Footer from '../../Components/Footer/Footer'
import HowItWorks from '../../Components/HowItWork/HowitWork'
import Chooseus from '../../Components/Chooseus/Chooseus'





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
