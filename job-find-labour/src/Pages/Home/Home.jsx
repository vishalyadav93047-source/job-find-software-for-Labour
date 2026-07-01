import React from 'react'
import "./Home.css"
import Mainnav from '../../Components/Mainnav/Mainnav'
import Platform from '../../Components/Platform/Platform'
import SearchBar from '../../Components/SearchBar/SearchBar'





function Home() {
  return (
    <>
    <div className='hero'>

   <Mainnav/>
   <Platform/>
   <SearchBar/>
   
    </div>
    </>
  )
}

export default Home
