//setting up our express, mongoose, and logger boilerplate functions
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//setting our port where our application will be locally hosted
const PORT = process.env.PORT || 3000;

//requiring our express application and linking to our different exercise javascript schema files
const Resistance = require("./models/resistance.js");
const Cardio = require("./models/cardio.js");
const app = express();


//boilerplate express and logger code
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//ensuring that mongoose is connected to our local host
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/exercisedb", { useNewUrlParser: true });

//sets up an app.post for a resistance workout
app.post("/submit", ({ body }, res) => {
    Resistance.create(body)
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.json(err);
      });
  });

//sets up an app.post for a cardio workout
app.post("/submit", ({ body }, res) => {
    Cardio.create(body)
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.json(err);
      });
  });

//setting up our port and console logging that the port is running correctly
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
