import "./Job.css";

function Job() {
  const jobs = [
    {
      id: 1,
      title: "Electrician",
      location: "Delhi",
      salary: "₹18,000/month",
      type: "Full Time",
    },
    {
      id: 2,
      title: "Plumber",
      location: "Gurgaon",
      salary: "₹20,000/month",
      type: "Full Time",
    },
    {
      id: 3,
      title: "Barber",
      location: "Noida",
      salary: "₹22,000/month",
      type: "Part Time",
    },
    {
      id: 4,
      title: "Welder",
      location: "Faridabad",
      salary: "₹25,000/month",
      type: "Full Time",
    },
    {
      id: 5,
      title: "Carpenter",
      location: "Jaipur",
      salary: "₹21,000/month",
      type: "Contract",
    },
    {
      id: 6,
      title: "Painter",
      location: "Lucknow",
      salary: "₹19,000/month",
      type: "Full Time",
    },
  ];

  return (
    <div className="jobs-page">
      <h1>Latest Jobs</h1>

      <div className="job-container">
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <h2>{job.title}</h2>

            <p>📍 {job.location}</p>
            <p>💰 {job.salary}</p>
            <p>🕒 {job.type}</p>

            <button className="jobbutton">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Job;