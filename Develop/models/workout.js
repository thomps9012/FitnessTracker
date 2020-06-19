//requires our mongoose schema
const mongoose = require("mongoose");

//sets up a new mongoose schema
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    //sets the date of the workout for date now
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
    //sets the type of workout
    type: {
        type: String,
        trim: true,
        required: "Enter an exercise type"
    },
    //sets the name of the workout to a string
    name: {
        type: String,
        trim: true,
        required: "Enter an exercise name"
    },
    //sets the duration of the workout to a number
    duration: {
        type: Number,
        required: "Enter an exercise duration in minutes"
    },
    //sets the weight of the workout to a number
    weight: {
        type: Number
    },
    //sets the reps of the workout to a number
    reps: {
        type: Number
    },
    //sets the "sets" of a workout to a number
    sets: {
        type: Number
    },
    //sets the distance to a number
    distance: {
        type: Number
    }
}]
},
{
    toJSON: {
        //includes properties when data is requested
        virtuals: true
    }
}
);

//adds a dynamically-created property to the schema
WorkoutSchema.virtual("totalDuration").get(function() {
    //reduces the array of exercises down to the sum of their durations
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

//sets our workoutSchema as a mongoose model
const Workout = mongoose.model("Workout", WorkoutSchema);

//exports our ResistanceSchema to be called in our server.js file
module.exports = Workout;
