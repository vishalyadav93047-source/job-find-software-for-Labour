import React, { useEffect, useState } from 'react'
import "./AlljobsDetails.css"
import labour from "../../assets/labour.jpeg"
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from "react-router-dom";


function AlljobsDetails() {

    const {id} = useParams();

    const [product, setProduct] = useState(null);

    //  const job = jobs.find((job) => job.id === Number(id));

    useEffect(()=>{
        fetch(`jobs/${id}`)
        .then((responce) => responce.json())
        .then((data) => setProduct(data));
    }, [id]);


    if (!product){
        return <h1>Loading......</h1>
    }


  return (
    <>
    
     <div className="AlljobsDetail">
    
          <div className="AlljobsDetail1">

            <div className="AlljobsDetaillist">
    
              <h2>50+ Jobs</h2>
    
              {jobs.map((job) => (
                <div className="AlljobsDetailcard" key={job.id}>
    
                  <div className="AlljobsDetailogo">
                    <img src={labour} alt="Footer" />
                  </div>
    
                  <div className="AlljobsDetaildetails">
    
                    <div className="AlljobsDetail-top-row">
                      <h3>{job.title}</h3>
    
                      <span className="AlljobsDetail-badge">
                        {job.type}
                      </span>
                    </div>
    
                    <h4>{job.Name}</h4>
    
                    <p>
                      <FaLocationDot /> {job.location}
                    </p>
    
                    {/* <p>{job.desc}</p> */}
    
                  </div>
    
                  <div className="AlljobsDetail-job-right">
    
                    <h3>{job.salary}</h3>
    
                    <button>
                      View Details 
                    </button>
    
                  </div>
    
                </div>
              ))}
    
            </div>
    
          </div>
    
        </div>
    </>
  )
}

export default AlljobsDetails
