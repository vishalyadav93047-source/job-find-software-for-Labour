import React from 'react'
import "./Home.css"
import Mainnav from '../../Components/Mainnav/Mainnav'
import Platform from '../../Components/Platform/Platform'
import Scroll from '../../Components/Scroll/Scroll'
import Footer from '../../Components/Footer/Footer'
import Job from '../../Components/Jobs/job'
import SearchBar from '../../Components/SearchBar/SearchBar'
import HowItWorks from '../../Components/HowItWork/HowitWork'
import PopularWorks from '../../Components/PopularWorks/PopularWorks'
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
   <Footer/>
    </div>
    </>
  )
}

export default Home
