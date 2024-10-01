// This brings in the 'express' library, which helps us create a web server.
const express = require('express');

// We create an 'app' by calling 'express'. It's like creating a website where we can set routes (paths).
const app = express();

// We define a 'port' where our app will listen for requests. In this case, it's 5000.
const port = 5000;

// We import the 'mongodb' function from a file called 'db'. This is likely where we connect to a database.
const mongodb = require("./db");

// Now, we call the 'mongodb' function to connect our app to the database as soon as the server starts.
mongodb();

// This part is a middleware function that runs before every request. It allows the frontend (at localhost:3000) to talk to the backend (this server).
app.use((req, res, next) => {
  // This sets a header to allow requests from 'http://localhost:3000'. It's like saying, "Hey, requests from this address are okay."
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // This allows certain types of headers in the request, like 'Content-Type' and 'Accept'.
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, x-Requested-with, Content-Type, Accept"
  );

  // 'next()' moves to the next middleware or route handler. It's like saying, "Okay, we're done here, move on!"
  next();
});

// This tells our app to automatically understand JSON data coming in the body of requests. So if someone sends data in JSON format, the app can read it.
app.use(express.json());

// This sets up a route for the homepage ('/'). When someone visits the homepage, it responds with "Hello World!".
app.get('/', (req, res) => {
  // 'res.send' sends a simple "Hello World!" message back to the person visiting the site.
  res.send('Hello World!');
});

// Here, we set up more routes (paths) under '/api'. It's like saying, "If someone goes to '/api', look for the routes in the 'CreateUser' file."
app.use('/api', require("./Routes/CreateUser"));

// Finally, we tell the app to start listening for requests on port 5000. When it starts, it will log this message to the console.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
