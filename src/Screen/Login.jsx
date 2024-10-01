import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    Myuser: "",
    password: "",
    Geolocation: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleOnsubmit = async (e) => {
    e.preventDefault();
    // Make sure to include the credentials in the fetch body
    const response = await fetch("http://localhost:5000/api/CreateUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    });

    // Check for response and handle accordingly
    const result = await response.json();
    console.log(result); // Log or handle the response
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleOnsubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleName"
              name="Myuser"
              value={credentials.Myuser}
              onChange={handleChange}
              aria-describedby="name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputEmail1"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              aria-describedby="password"
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>

          <button type="submit" className="btn btn-success">
            Submit
          </button>

          <Link to="/signUp" className="m-3 btn btn-danger">
            SignUp
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
