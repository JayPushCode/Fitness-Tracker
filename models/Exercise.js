const {Schema, model} = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the excercise"
  },
  isCardio: {
    type: Boolean,
    required: "Is it a Cardio Excercise?"
  },
  date: {
    type: Date,
    default: Date.now
  },
  duration: {
      type: Number,
  },
  weight: [{
      weight: Number,
      sets: Number,
      reps: Number
  }],
  distance: {
      type: Number
  }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
