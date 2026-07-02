import React, { useState } from "react";
import "./JobFinder.css";
import { Link } from "react-router-dom";

function JobFinder() {
    const [form, setForm] = useState({
        JobType: "",
        location: "",
        salary: "",
        type: "",

    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Your Detiles has Submited");
    };

    return (
        <div className="Jobfinderhero">
            <div className="Jobfinder-container">
                <div className="Jobfinder-card">

                    <div className="icon9">👤</div>

                    <h1>Enter Deatils</h1>
                    <p>Continue to be a Meamber</p>

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            name="job"
                            placeholder="Job Type"
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="Text"
                            name="Text"
                            placeholder="Location"
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="Numder"
                            name="Salery"
                            placeholder="Salery Amount"
                            onChange={handleChange}
                            required
                        />

                        <select className="Jobfinderinput"
                            name="jobType"
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Job Type</option>
                            <option value="Full Time">Full Time</option>
                            <option value="Morning">Morning</option>
                            <option value="Evening">Evening</option>
                        </select>



                        <button>Submit Details</button>

                    </form>

                </div>
            </div>

        </div>
    );
}

export default JobFinder;