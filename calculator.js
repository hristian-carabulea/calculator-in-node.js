// Express Calculator Exercise
// use npm to install express module in this directory: npm install express
// require express in project

const express = require('express');

// Setup express
const app = express();
const port = 3000;

// Create a root route get method with app.get()
// app.get('/', (req, res) => { 
//## OR use the word function and no =>
app.get('/', function (req, res) {
  /*   
  console.log(req);
  console.log(res);
  */
  res.send("<h1>Hello there, Wide Wild World!</h1>");
});

app.listen(port, function() {
  // port can be any number but 3000 is a non-written standard
  console.log("Server started at http://localhost:${port}");
});
