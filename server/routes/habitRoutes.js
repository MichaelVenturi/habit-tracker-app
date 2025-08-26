import { Router } from "express";
import { createDailyHabit, createWeeklyHabit, getAllHabits, getDailyHabits, getWeeklyHabits } from "../controllers/habitControllers";

// /api/habits/
const router = Router();

router.route("/").get(getAllHabits);

router.route("/daily").get(getDailyHabits).post(createDailyHabit);
router.route("/weekly").get(getWeeklyHabits).post(createWeeklyHabit);

export default router;
