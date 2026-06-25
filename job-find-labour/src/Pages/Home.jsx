import React from 'react'
import "./Home.css"
import Mainnav from '../Components/Mainnav'
import Platform from '../Components/Platform'
import Footer from '../Components/Footer'

function Home() {
  return (
    <>
    <div className='hero'>

    <Mainnav/>
    <Platform/>
    <Footer/>
    </div>
    </>
  )
}

export default Home
