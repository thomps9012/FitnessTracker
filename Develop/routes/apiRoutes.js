const router = require("express").Router();
const Workout = require("../models/Workout.js");

//get route for retrieving workout data from the last workout
router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

//post route for creating a new resistance or cardio workout
router.post("/api/workouts", (req, res) =>{
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

//put route for updating a workout
router.put("/api/workouts/:id", ({ body, params}, res => {
    Workout.findByIdAndUpdate(
        params.id,
        {
            $push: {exercises: body}},
            //runs a validator to ensure new exercises meet our schema
            { new: true, runValidators: true}
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
}));

//get route for retrieving workout data from a specific range of dates
router.get("/api/workouts/range", ({ query }, res) => {
    Workout.find({ day: { $gte: query.start, $lte: query.end } })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

//delete route for finding a workout by an id number and deleting
router.delete("/api/workouts", ({ body}, res) => {
    Workout.findByIdAndDelete(body.id)
        .then(() => {
            res.json(true);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exercises = router;