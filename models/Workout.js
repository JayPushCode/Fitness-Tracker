const { Schema, model }= require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for your workout"
  },
  date: {
    type: Date,
    default: Date.now
  },
  totalDuration: {
      type: Number,
  },
  totalDistance: {
      type: Number
  },
  Excercises: [
      {
      type: Schema.Types.ObjectId,
      ref: 'Exercise',
      },
  ],
});

const WorkoutSchema = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
