const express = require('express');
const app = express();
const port = 5000;
const mongodb = require("./db");
mongodb();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});