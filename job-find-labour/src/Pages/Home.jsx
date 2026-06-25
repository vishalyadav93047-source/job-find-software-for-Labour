import React from 'react'
import "./Home.css"
import Mainnav from '../Components/Mainnav'
import Platform from '../Components/Platform'

function Home() {
  return (
    <>
    <div className='hero'>

    <Mainnav/>
    <Platform/>
    </div>
    </>
  )
}

export default Home
