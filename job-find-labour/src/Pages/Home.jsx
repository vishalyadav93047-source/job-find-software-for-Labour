import React from 'react'
import "./Home.css"
import Mainnav from '../Components/Mainnav/Mainnav'
import Platform from '../Components/Platform/Platform'
import Footer from '../Components/Footer/Footer'
import Job from '../Components/Jobs/job'


function Home() {
  return (
    <>
    <div className='hero'>

   <Mainnav/>
   <Platform/>
   <Job/>
   <Footer/>
    </div>
    </>
  )
}

export default Home
