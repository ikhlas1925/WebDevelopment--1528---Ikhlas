const express = require("express"); // import
const bodyParser = require("body-parser"); // import
const cors = require("cors"); // import cors
const monk = require("monk");
const timeAgo = require("node-time-ago");
const mongo = require("mongo");
const mongodb = require("mongodb");
const app = express(); // creating an express app

app.use(express.json()) // enable to read json data coming in post requests
app.use(bodyParser.json());
const path = require('path');

app.use(cors()); // enabling cors to allow requests to come inside the server

//testimonials
const db = monk("localhost/amdtdb"); // db to connect to
const dbtestimonials = db.get("testimonials"); // from db get me the collection (table) called 'features'

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/dogs", function (req, res) {
  res.send("All the dogs in the world");
});

app.get("/testimonials", async function (req, res, next) {
  var allTestiInDb = await dbtestimonials.find();
  allTestiInDb.every(f => (f.time = timeAgo(f.time)));
  res.send(allTestiInDb);
});

app.post("/testimonials", async function (req, res, next) {
  console.log(req);
  var newTestiToAdd = {
    test: req.body.test,
    name: req.body.name,
    age: req.body.age,
    time: Date.now()
  };
  await dbtestimonials.insert(newTestiToAdd);
  res.send("Successful");
});

app.listen(3000, function () {
  console.log("Application is running on Port 3000");
});

//contactUs

app.use(express.urlencoded({ 
  extended: false 
}));

app.post('/email', (req, res) => {
  console.log('Data: ', req.body);
  res.json({message: 'Message received'})
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/html', 'contact.html'));
});