import React from 'react'
import "./Working.css"
import work from "../../assets/work.png"
import Mainnav from '../Mainnav/Mainnav'
import Footer from '../Footer/Footer'

function Working() {
  return (
   <>
<div className='Mainworking'>
   <Mainnav/>
   <div className='working'>

    <img src={work} alt="work"  height="600px" width="60%"/>

   </div>
   <Footer/>

</div>
   </>
  )
}

export default Working
