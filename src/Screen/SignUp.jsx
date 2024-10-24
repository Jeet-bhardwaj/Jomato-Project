import React, { useState } from "react"; // Import React and the useState hook
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate for navigation

const SignUp = () => {
  const navigate = useNavigate(); // Ensure this is inside the component
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/CreateUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.location,
        }),
      });

      const json = await response.json();
      console.log(json);

      if (response.ok) {
        // Redirect to homepage or dashboard on successful sign-up
        navigate("/"); // Correct use of navigate
        console.log("User signed up successfully!");
        alert("Thanku")
      } else {
        console.error("Error:", json.message || "Failed to sign up");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleOnSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleName"
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
            <label htmlFor="location" className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={credentials.location}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
          <Link to="/login" className="m-3 btn btn-danger">Already Have Account</Link>
        </form>
      </div>
    </>
  );
};

export default SignUp;
