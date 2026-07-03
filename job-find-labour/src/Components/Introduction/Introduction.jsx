import React from 'react'
import "./Introduction.css"
import labo from "../../assets/labo.jpeg"

function Introduction() { 
    return (
        <>
            <div className='introduction'>
                <div className='image1'>
                    <img src={labo} alt="" width="440px" height="550px" style={{borderRadius:"15px"}} />
                </div>
                <div className='text1'><h1>Welcome to Job Find Software for Labour</h1>
                            <h2>Connecting Labour with Opportunities</h2>
                    <p> Our platform is designed to help labourers find daily wage
                        jobs, contract work, and full-time opportunities in their local area. 
                        We make the process simple, transparent, and reliable.<br/><br/> Whether you are
                         a skilled worker, semi-skilled worker, or helper, Job Find Software 
                         for Labour is here to support your journey towards a better tomorrow<br/><br/> 
                         Find the right job. Earn with respect. Grow every day.</p></div>

            </div>





        </>
    )
}

export default Introduction
