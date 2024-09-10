const express = require('express');
const app = express();
const port = 5000;
const mongodb = require("./db");
mongodb();

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Routes for user creation
app.use('/api', require("./Routes/CreateUser"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
