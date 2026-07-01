import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [form, setForm] = useState({
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful!");
    console.log(form);
  };

  return (
    <div className="container">
      <div className="login-box">
        <div className="icon8">👤</div>
        <h1>Welcome Back</h1>
        <p>Login to continue</p>

        <form onSubmit={handleSubmit}>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>

        <span>
          Don't have account? <a href="/">Sign Up</a>
        </span>
      </div>
    </div>
  );
}

export default Login;