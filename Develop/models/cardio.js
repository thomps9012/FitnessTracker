//requires our mongoose schema
const mongoose = require("mongoose");

//sets up a new mongoose schema
const Schema = mongoose.Schema;

//creates a ResistanceSchema which will be used to export our data into a mongodb
const CardioSchema = new Schema({
    //sets the date of the workout for date now
    day: {
        type: Date,
        default: Date.now
    },
    //sets the name of the workout to a string
    name: {
        type: String,
        trim: true
    },
    //sets the duration of the workout to a number
    duration: {
        type: Number,
        trim: true
    },
    //sets the distance of the workout to a number
    distance: {
        type: Number,
        trim: true
    }
});

//sets our CardioSchema as a mongoose model
const Cardio = mongoose.model("Cardio", CardioSchema);

//exports our CardioSchema to be called in our server.js file
module.exports = Cardio;
