import React, { useState } from "react"; // Import React and the useState hook to manage state in this component
import { Link } from "react-router-dom"; // Import Link to navigate between different pages without refreshing

// This is the SignUp component that will show the form to the user
const SignUp = () => {
  // We are creating an object called "credentials" to store the user's name, email, password, and location.
  // useState lets us keep track of these values as the user types them into the form.
  const [credentials, setCredentials] = useState({
    name: "",       // The user's name starts as an empty string
    email: "",      // The user's email starts as an empty string
    password: "",   // The user's password starts as an empty string
    location: "",   // The user's location starts as an empty string
  });

  // This function runs when the user submits the form.
  const handleOnSubmit = async (e) => {
    e.preventDefault(); // Prevent the page from refreshing when the form is submitted
    
    try {
      // We are sending the user's data to the backend server (located at "http://localhost:5000/api/CreateUser")
      const response = await fetch("http://localhost:5000/api/CreateUser", {
        method: "POST", // We are making a POST request to send data to the server
        headers: {
          "Content-Type": "application/json", // Telling the server we're sending data in JSON format
        },
        // We are converting the user's details (name, email, password, and location) into a JSON string to send in the request
        body: JSON.stringify({
          name: credentials.name,            // The user's name
          email: credentials.email,          // The user's email
          password: credentials.password,    // The user's password
          location: credentials.location,    // The user's location
        }),
      });

      // After sending the data, we wait for the server to respond and then convert that response into a JavaScript object
      const json = await response.json(); 
      console.log(json); // For now, we just print the response from the server to the console

      // If the response from the server is not okay, we print an error message to the console
      if (!response.ok) {
        console.error("Error:", json.message || "Failed to sign up"); // Show error if something goes wrong
      } else {
        console.log("User signed up successfully!"); // If everything is fine, we log success
      }
    } catch (error) {
      // If something goes wrong in the fetch request (like a network error), we catch it and log the error
      console.error("Error:", error); 
    }
  };

  // This function runs whenever the user types something into the form's input fields.
  const onChange = (event) => {
    // We update the "credentials" object with the new value typed by the user.
    // For example, if the user types their name, we update the "name" field.
    setCredentials({
      ...credentials, // Keep the current values of the object
      [event.target.name]: event.target.value, // Update only the field that the user is typing into
    });
  };

  // This is the form that the user will fill out to sign up
  return (
    <>
      <div className="container"> {/* A container for styling the form */}
        <form onSubmit={handleOnSubmit}> {/* When the user submits the form, handleOnSubmit is called */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label"> {/* Label for the name input */}
              Name
            </label>
            <input
              type="text" // This is a text box for the user's name
              className="form-control"
              id="exampleName"
              name="name" // The name of this input field is "name"
              value={credentials.name} // The value of the input field is what the user typed (stored in credentials.name)
              onChange={onChange} // Whenever the user types, we call the onChange function to update the state
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email" // This is a text box specifically for the email
              className="form-control"
              id="exampleInputEmail1"
              name="email" // The name of this input field is "email"
              value={credentials.email} // The value is what the user typed (stored in credentials.email)
              onChange={onChange} // Update the email value in the state whenever the user types
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password" // This is a password box, so what the user types will be hidden
              className="form-control"
              id="exampleInputPassword1"
              name="password" // The name of this input field is "password"
              value={credentials.password} // The value is stored in credentials.password
              onChange={onChange} // Update the password value in the state whenever the user types
            />
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text" // This is a text box for the user's location
              className="form-control"
              id="location"
              name="location" // The name of this input field is "location"
              value={credentials.location} // The value is what the user typed (stored in credentials.location)
              onChange={onChange} // Update the location value in the state whenever the user types
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit {/* This button submits the form and triggers the handleOnSubmit function */}
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already Have Account {/* This link takes the user to the login page */}
          </Link>
        </form>
      </div>
    </>
  );
};

export default SignUp; // Export this SignUp component so it can be used elsewhere in the app
