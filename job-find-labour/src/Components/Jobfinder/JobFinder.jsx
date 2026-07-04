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
                    <div className="jobfindtext">
                    <h1>Enter Deatils</h1>
                    <p>Continue to be a Meamber</p>
                    </div>

                    <form onSubmit={handleSubmit}>


                        <select className="Jobfindertypee"
                            name="job"
                            placeholder="Job Type"
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Job </option>
                            <option >Electrician</option>
                            <option >Plumber</option>
                            <option >Barber</option>
                            <option >House Help</option>
                            <option >Carpenter</option>
                            <option >Painter</option>
                            
                            
                        </select>



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
                            <option value="">Select Job Time</option>
                            <option value="Full Time">Full Time</option>
                            <option value="Morning">Morning</option>
                            <option value="Evening">Evening</option>
                        </select>



                        <button className="but">Submit Details</button>

                    </form>

                </div>
            </div>

        </div>
    );
}

export default JobFinder;