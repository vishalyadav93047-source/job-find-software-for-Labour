import React, { useState } from "react";
import "./SignUp.css";

function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Password not matched");
      return;
    }

    alert("Account Created Successfully");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">

        <div className="icon7">👤</div>

        <h1>Create Account</h1>
        <p>Sign up to continue</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />

          <button>Create Account</button>

        </form>

        <span>
          Already have account?
          <a> Login</a>
        </span>

      </div>
    </div>
  );
}

export default SignUp;