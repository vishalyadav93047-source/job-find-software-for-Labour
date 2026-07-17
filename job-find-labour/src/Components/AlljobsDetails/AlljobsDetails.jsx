import React from "react";
import "./AlljobsDetails.css";
import labour from "../../assets/labour.jpeg";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from "react-router-dom";

const jobs = [
  {
    id: 1,
    title: "Electrician",
    // Name:"Abc",
    location: "Delhi",
    salary: "₹500 / Day",
    type: "Full Time",
  },
  {
    id: 2,
    title: "Plumber",
    Name: "Abc",
    location: "Gurgaon",
    salary: "₹600 / Day",
    type: "Full Time",
  },
  {
    id: 3,
    title: "Barber",
    Name: "Abc",
    location: "Noida",
    salary: "₹300 / Day",
    type: "Part Time",
  },
  {
    id: 4,
    title: "Welder",
    Name: "Abc",
    location: "Faridabad",
    salary: "₹700 / Day",
    type: "Full Time",
  },
  {
    id: 5,
    title: "Carpenter",
    Name: "Abc",
    location: "Jaipur",
    salary: "₹700 / Day",
    type: "Full Time",
  },
  {
    id: 6,
    title: "Painter",
    Name: "Abc",
    location: "Lucknow",
    salary: "₹600 / Day",
    type: "Full Time",
  },
  {
    id: 7,
    title: "House Help",
    Name: "Abc",
    location: "Lucknow",
    salary: "₹400 / Day",
    type: "Full Time",
  },
  {
    id: 8,
    title: "Technician",
    Name: "Abc",
    location: "Lucknow",
    salary: "₹800 / Day",
    type: "Full Time",
  },
];

function AlljobsDetails() {
  const { id } = useParams();

  const product = jobs.find((job) => job.id === Number(id));

  if (!product) {
    return <h2>Job Not Found</h2>;
  }

  return (
    <div className="AlljobsDetail">
      <div className="AlljobsDetail1">
        <div className="AlljobsDetailcard">

          <div className="AlljobsDetailogo">
            <img src={labour} alt="Labour" />
          </div>

          <div className="AlljobsDetaildetails">

            <div className="AlljobsDetail-top-row">
              <h3>{product.title}</h3>

              <span className="AlljobsDetail-badge">
                {product.type}
              </span>
            </div>

            <h4>{product.Name}</h4>

            <p>
              <FaLocationDot /> {product.location}
            </p>

          </div>

          <div className="AlljobsDetail-job-right">
            <h3>{product.salary}</h3>

            <button>Apply Now</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AlljobsDetails;