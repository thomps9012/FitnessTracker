//requires our mongoose schema
const mongoose = require("mongoose");

//sets up a new mongoose schema
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    //sets the date of the workout for date now
    day: {
        type: Date,
        default: Date.now
    },
    //sets the type of workout
    type: {
        type: String,
        trim: true
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
    //sets the weight of the workout to a number
    weight: {
        type: Number,
        trim: true
    },
    //sets the reps of the workout to a number
    reps: {
        type: Number,
        trim: true
    },
    //sets the "sets" of a workout to a number
    sets: {
        type: Number,
        trim: true
    }
});

//sets our workoutSchema as a mongoose model
const workout = mongoose.model("Workout", workoutSchema);

//exports our ResistanceSchema to be called in our server.js file
module.exports = workoutSchema;
