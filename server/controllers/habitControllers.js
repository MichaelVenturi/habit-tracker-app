import asyncHandler from "express-async-handler";
import { Habit, DailyHabit, WeeklyHabit } from "../models/habitModel.js";

export const getAllHabits = asyncHandler(async (req, res) => {
  const habits = await Habit.find();
  res.status(200).json(habits);
});

export const getDailyHabits = asyncHandler(async (req, res) => {
  const habits = await DailyHabit.find();
  res.status(200).json(habits);
});

export const getWeeklyHabits = asyncHandler(async (req, res) => {
  const habits = await WeeklyHabit.find();
  res.status(200).json(habits);
});

export const createDailyHabit = asyncHandler(async (req, res) => {
  let habit = await DailyHabit.create({
    habitTitle: req.body.habitTitle,
  });
  res.status(200).json(habit);
});

export const createWeeklyHabit = asyncHandler(async (req, res) => {
  let habit = await WeeklyHabit.create({
    habitTitle: req.body.habitTitle,
    weeklyTarget: req.body.weeklyTarget,
  });
  res.status(200).json(habit);
});
