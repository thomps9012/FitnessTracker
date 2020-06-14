const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  
  name: {
    type: String,
    unique: true
  },
  cardio: [
    {
      type: Schema.Types.ObjectId,
      ref: "cardio"
    }
  ],
  resistance: [
    {
      type: Schema.Types.ObjectId,
      ref: "Resistance"
    }
  ]
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
