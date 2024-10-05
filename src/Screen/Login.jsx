import React, { useState } from "react"; 
import { Link } from "react-router-dom"; 


const Login = () => {



  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
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
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json(); 
      console.log(json);
      if (!response.ok) {
        console.error("Error:", json.message || "Failed to sign up");
      } else {
        console.log("User signed up successfully!");
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
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleName"
              name="Myuser"
              value={credentials.Myuser}
              onChange={onChange}
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
              onChange={onChange}
              aria-describedby="password"
            />
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
