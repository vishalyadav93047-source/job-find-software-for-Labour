import React from "react";
import "./Alljobs.css";

const jobs = [
  {
    id: 1,
    title: "Electricianr",
    location: "Delhi",
    salary: "₹500/Day",
    type: "Full Time",
    shift: "Day Shift",
  },
  {
    id: 2,
    title: "Plumber",
    location: "Lucknow",
    salary: "₹400/Day",
    type: "Part Time",
    shift: "Flexible",
  },
  {
    id: 3,
    title: "Electrician",
    location: "Mumbai",
    salary: "₹700 / Day",
    type: "Full Time",
    shift: "Morning",
  },
  {
    id: 4,
    title: "Driver",
    location: "Jaipur",
    salary: "₹800/Day",
    type: "Part Time",
    shift: "Evening",
  },
  {
     id: 4,
      title: "Welder",
      location: "Faridabad",
      salary: "₹18,000/month",
      type: "Full Time",
      shift: "Evening",
    },
    {
      id: 5,
      title: "Carpenter",
      location: "Jaipur",
      salary: "₹21,000/month",
      type: "Contract",
      shift: "Evening",
    },
    {
      id: 6,
      title: "Painter",
      location: "Lucknow",
      salary: "₹19,000/month",
      type: "Full Time",
      shift: "Evening",
    },
    {
      id: 7,
      title: "House Help",
      location: "Lucknow",
      salary: "₹10,000/month",
      type: "Full Time",
      shift: "Evening",
    },
];

export default function LabourJobs() {
  return (
    <div className="jobs-page">

      <div className="herooo">
        <h1>Find Labour Jobs Near You</h1>
        <p>Search thousands of verified labour jobs.</p>

        <div className="search-boxx">
          <input type="text" placeholder="Job Title or Skill" />
          <input type="text" placeholder="Location" />
          <button>Search</button>
        </div>
      </div>

      <div className="content">

        <div className="sidebar">
          <h3>Filters</h3>

          <h4>Category</h4>

          <label><input type="radio" name="category"/> Construction</label>
          <label><input type="radio" name="category"/> Driver</label>
          <label><input type="radio" name="category"/> Delivery</label>
          <label><input type="radio" name="category"/> Electrician</label>
          <label><input type="radio" name="category"/> Factory</label>
          <label><input type="radio" name="category"/> Plumber</label>

          <h4>Job Type</h4>

          <label><input type="radio" name="category"/> Full Time</label>
          <label><input type="radio" name="category"/> Part Time</label>
          <label><input type="radio" name="category"/> Contract</label>

          <button className="filter-btn">
            Apply Filters
          </button>
        </div>

        <div className="jobs-list">
          <h3>Available Jobs</h3>

          {jobs.map((job) => (
            <div className="job-card" key={job.id}>
              <div>
                <h2>{job.title}</h2>

                
                <p>📍{job.location}</p>
                <p>{job.salary}</p>

                <div className="tags">
                  <span>{job.type}</span>
                  <span>{job.shift}</span>
                </div>
              </div>

              <button>View Details</button>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}