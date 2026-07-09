import React from "react";
import "./Alljobs.css";
import labour from "../../assets/labour.jpeg"
import { FaLocationDot } from "react-icons/fa6";


const jobs = [
 {
      id: 1,
      title: "Electrician",
      Name:"Abc",
      location: "Delhi",
      salary: "₹500 / Day",
      type: "Full Time",
    },
    {
      id: 2,
      title: "Plumber",
      Name:"Abc",
      location: "Gurgaon",
      salary: "₹600 / Day",
      type: "Full Time",
    },
    {
      id: 3,
      title: "Barber",
      Name:"Abc",
      location: "Noida",
      salary: "₹300 / Day",
      type: "Part Time",
    },
    {
      id: 4,
      title: "Welder",
      Name:"Abc",
      location: "Faridabad",
      salary: "₹700 / Day",
      type: "Full Time",
    },
    {
      id: 5,
      title: "Carpenter",
      Name:"Abc",
      location: "Jaipur",
      salary: "₹700 / Day",
      type: "Full Time",
    },
    {
      id: 6,
      title: "Painter",
      Name:"Abc",
      location: "Lucknow",
      salary: "₹600 / Day",
      type: "Full Time",
    },
    {
      id: 7,
      title: "House Help",
      Name:"Abc",
      location: "Lucknow",
      salary: "₹400 / Day",
      type: "Full Time",
    },
    {
      id: 8,
      title: "Technician",
      Name:"Abc",
      location: "Lucknow",
      salary: "₹800 / Day",
      type: "Full Time",
    },
];

function Alljobs() {
  return (
    <div className="filter-job-page">

     

      <div className="filter-main-container">

        

        <div className="filter-sidebar">

          <h2>Filter Jobs</h2>

          <div className="filter-box">
            <label>📍 Location</label>
            <input type="text" placeholder="Enter City" />
          </div>

          <div className="filter-box">
            <label>💼 Job Category</label>
            <select>
              <option>All Categories</option>
              <option>Construction</option>
              <option>Factory</option>
              <option>Driver</option>
              <option>Cleaner</option>
              <option>Electrician</option>
            </select>
          </div>

          <div className="filter-box">
            <label>💼 Job Type</label>
            <select>
              <option>All Types</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Daily Wage</option>
            </select>
          </div>

          <div className="filter-box">
            <label>💰 Salary</label>
            <select>
              <option>Any Salary</option>
              <option>₹300 - ₹500</option>
              <option>₹500 - ₹700</option>
              <option>₹700+</option>
            </select>
          </div>

          <div className="filter-box">
            <label>🕐 Shift</label>
            <select>
              <option>All Shifts</option>
              <option>Morning</option>
              <option>Evening</option>
              <option>Night</option>
            </select>
          </div>

          <button className="filter-apply-btn">
            🔎 Apply Filters
          </button>

          <button className="filter-reset-btn">
            🍥 Reset Filters
          </button>

        </div>

       

        <div className="filter-job-list">

          <h2>50+ Jobs</h2>

          {jobs.map((job) => (
            <div className="filter-job-card" key={job.id}>

              <div className="filter-job-logo">
                <img src={labour} alt="Footer" />
              </div>

              <div className="filter-job-details">

                <div className="filter-top-row">
                  <h3>{job.title}</h3>

                  <span className="filter-badge">
                    {job.type}
                  </span>
                </div>

                <h4>{job.Name}</h4>

                <p>
                  <FaLocationDot /> {job.location}
                </p>

                {/* <p>{job.desc}</p> */}

              </div>

              <div className="filter-job-right">

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
  );
}

export default Alljobs;