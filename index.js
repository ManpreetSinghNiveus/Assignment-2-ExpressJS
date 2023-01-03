const express = require("express");
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server Started");
});

//Create a GET api that returns query param, path param and return both values with info as json
//Use http://localhost:3001/user/33?path=home&redirect=email in order to test.

app.get("/user/:id", (req, res) => {
  const pathParams = req.params.id;
  const queryParams = req.query;
  res.send({
    pathParams,
    queryParams,
  });
});

//Create a POST api which acccepts a JSON data. Return an array of data.
//Lets say we have dummy users we will add new users on Add New button on index.html

const users = [
  {
    firstName: "Arshdeep",
    lastName: "Sharma",
  },
  {
    firstName: "Harpreet",
    lastName: "Brar",
  },
];

app.post("/adduser", (req, res) => {
  users.push({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
