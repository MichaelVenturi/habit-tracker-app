import mongoose from "mongoose";

const habitSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    habitTitle: {
      type: String,
      required: [true, "please add text for the habit"],
    },
    streak: {
      type: Number,
      required: true,
      default: 0,
    },
    bestStreak: {
      type: Number,
      required: true,
      default: 0,
    },
    lastCompleted: {
      type: Date,
    },
  },
  { discriminatorKey: "habitType" }
);

export const Habit = mongoose.model("Habit", habitSchema);

export const DailyHabit = Habit.discriminator("daily", new Schema({}));
export const WeeklyHabit = Habit.discriminator(
  "weekly",
  new Schema({
    weeklyTarget: {
      type: Number,
      required: [true, "Please enter your weekly target"],
    },
    completionsThisWeek: {
      type: Number,
      default: 0,
    },
  })
);
