import React from 'react'
import "./Introduction.css"
import labo from "../../assets/labo.jpeg"

function Introduction() {
    return (
        <>
            <div className='introduction'>
                <div className='image1'>
                    <img src={labo} alt="" width="440px" height="550px" style={{ borderRadius: "15px" }} />
                </div>
                <div className='text1'><h1>Welcome to Job Find Software for Labour</h1>
                    <h2>Connecting Labour with Opportunities</h2>
                    <p> Our platform is designed to help labourers find daily wage
                        jobs, contract work, and full-time opportunities in their local area.
                        We make the process simple, transparent, and reliable.<br /><br /> Whether you are
                        a skilled worker, semi-skilled worker, or helper, Job Find Software
                        for Labour is here to support your journey towards a better tomorrow<br /><br />
                        Find the right job. Earn with respect. Grow every day.</p></div>

            </div>

            <div className='Ownerintroduction'>
                <div className='Ownerintroductionimage1'>
                    <h2>Founder’s Message</h2>
                    <img
                        src={labo}
                        alt="Founder"
                        height="250px"
                        width="250px"
                    />
                </div>

                <div className='Ownerintroductiontext1'>
                    <p>
                        Welcome to <b>Job Find Software for Labour</b>. Our mission is
                        to connect skilled workers with trusted employers through a
                        simple and reliable platform.
                    </p>

                    <p>
                        We aim to make job searching easier, faster, and more accessible
                        while helping employers find the right talent.
                    </p>

                    <p>
                        Together, we are creating better employment opportunities for
                        every worker across India.
                    </p>

                    <h2>Vishal Yadav</h2>
                    <h3>Founder & Developer</h3>
                </div>
            </div>





            <div className='Ownerintroduction1'>
                <div className='Ownertext2'>
                    <p>
                        Our vision is to build a trusted employment platform that
                        connects skilled workers with genuine employers across India.
                    </p>

                    <p>
                        We believe technology can simplify the hiring process and create
                        better career opportunities for every labourer while helping
                        businesses find reliable workers quickly.
                    </p>

                    <p>
                        Together, we are committed to making employment more accessible,
                        transparent, and beneficial for everyone.
                    </p>

                    <h2>Vishal Yadav</h2>
                    <h3>Owner & Project Developer</h3>
                </div>

                <div className='Ownerintroductionimage2'>
                    <h2>Owner’s Message</h2>
                    <img
                        src={labo}
                        alt="Owner"
                        height="250px"
                        width="250px"
                    />
                </div>
            </div>





        </>
    )
}

export default Introduction
