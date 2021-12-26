// Express Calculator Exercise
// use npm to install express module in this directory: npm install express
// require express in project
// must install body-parser with npm install body-parser
// then require body-parser

const express = require("express");
const bodyParser = require("body-parser");
// Setup express
const app = express();

var num1 = 0;
var num2 = 0;
var num3 = 0;
var operator = "+";

app.use(bodyParser.urlencoded({extended: true}));

// Create a root route get method with app.get()
// app.get('/', (req, res) => { 
//## OR use the word function and no =>
app.get('/', function (req, res) {
  /*   
  console.log(req);
  console.log(res);
  */
  // res.send("<h1>Hello there, Wide Wild World!</h1>");
  res.sendFile(__dirname + "/index.html");
  //console.log(__dirname);

});

app.post("/", function(req, res) {
  
  console.log(req.body.num1);
  console.log(req.body.num2);
  console.log(req.body.operator);


  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var operator = req.body.operator;

  switch(operator) {
    case "+":
      result = num1 + num2;
      res.send("The result of the calculation is: " + result);
      break;

    case "-":
      result = num1 - num2;
      res.send("The result of the calculation is: " + result);
      break;

    case "*":
      result = num1 * num2;
      res.send("The result of the calculation is: " + result);
      break;

    case "/":
      result = num1 / num2;
      res.send("The result of the calculation is: " + result);
      break;

    default:
      res.send("You entered a false operator: " + operator + ". Please enter only of the following: + - * /");
  }

  res.send("The result of the calculation is: " + result);
  console.log("The result of the calculation is: " + result);
})

app.listen(3000, function() {
  // port can be any number but 3000 is a non-written standard
  // port is not showing using the port constant
  // console.log("Server started at http://localhost:${port}");
  console.log("Server is running on port 3000");
});
