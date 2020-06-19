const db = require("../models");

module.exports = function(app){
//get route for retrieving workout data from the last workout
app.get("/api/workouts", (req, res) => {
    db.Workout.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

//post route for creating a new resistance or cardio workout
app.post("/api/workouts", (req, res) =>{
    db.Workout.create({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

//put route for updating a workout
app.put("/api/workouts/:id", ({ body, params}, res => {
    db.Workout.findByIdAndUpdate(
        params.id,
        {
            $push: {exercises: body}},
            //runs a validator to ensure new exercises meet our schema
            { new: true, runValidators: true}
    )
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
}));

//get route for retrieving workout data from a specific range of dates
app.get("/api/workouts/range", ({ query }, res) => {
    db.Workout.find({ day: { $gte: query.start, $lte: query.end } })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

};
