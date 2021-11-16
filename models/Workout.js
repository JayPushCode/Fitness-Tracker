const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: { type: String, required: "Resistance or Cardio?" },
            name: { type: String, required: "Type out a name for your excercise"},
            duration: Number,
            distance: Number,
            weight: Number,
            reps: Number,
            sets: Number,
        },
    ],
    totalDuration: Number,
});

workoutSchema.methods.getTotalDuration = function () {
    let sum = 0;
    this.exercises.forEach((element) => {
        sum += element.duration;
    });
    return sum;
};

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
