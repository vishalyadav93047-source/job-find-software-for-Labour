import "./Alljobs.css"

function Alljobs() {
  const Alljobbs = [
    {
      id: 1,
      title: "Electrician",
      location: "Delhi",
      salary: "₹500/Day",
      type: "Full Time",
    },
    {
      id: 2,
      title: "Plumber",
      location: "Gurgaon",
      salary: "₹400/Day",
      type: "Full Time",
    },
    {
      id: 3,
      title: "Barber",
      location: "Noida",
      salary: "₹300/Day",
      type: "Part Time",
    },
    {
      id: 4,
      title: "Welder",
      location: "Faridabad",
      salary: "₹18,000/month",
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
    {
      id: 7,
      title: "House Help",
      location: "Lucknow",
      salary: "₹10,000/month",
      type: "Full Time",
    },
    {
      id: 8,
      title: "Technician",
      location: "Lucknow",
      salary: "₹19,000/month",
      type: "Full Time",
    },
    
  ];

  return (
    <div className="Alljobs-page">
      <h1>All Type Of Jobs</h1>

      <div className="Alljobs-container">
        {Alljobbs.map((job) => (
          <div className="Alljobs-card" key={job.id}>
            <h2>{job.title}</h2>

            <p>📍 {job.location}</p>
            <p>💰 {job.salary}</p>
            <p>🕒 {job.type}</p>

            <button className="Alljobsbutton">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Alljobs;