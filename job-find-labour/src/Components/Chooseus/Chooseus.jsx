import React from 'react'
import "./Chooseus.css"
import { FaGraduationCap } from "react-icons/fa";
import { SlBookOpen } from "react-icons/sl";
import { FaGlobe } from "react-icons/fa";


function Chooseus() {
  return (
    <>
      <div className='Chooseus'>

        <div className='Chooseus1'>
          <div className='text'>
            <h3>Why Choose us?</h3>
          </div>
        </div>

        <div className='Choose'>
          <div className='Choose1'>
            <div className='icon1'>
              ☑️
            </div>
            <div className='Choosetext'>
              <h3>Verified Employers</h3>
              <p>All employers are Verified<br/> and trusted</p>
            </div>
          </div>

          <div className='Choose1'>
            <div className='icon1'>
              🔍
            </div>
            <div className='Choosetext'>
              <h3>Easy Job Search</h3>
              <p>Find jobs easily by location<br/> and category</p>
            </div>
          </div>

          <div className='Choose1'>
            <div className='icon1'>
              📄
            </div>
            <div className='Choosetext'>
              <h3>Free Registration</h3>
              <p>Register for free and apply<br/> unlimited jobs</p>
            </div>
          </div>



        </div>
      </div>
    </>
  )
}

export default Chooseus
