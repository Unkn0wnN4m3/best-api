import express from "express";
import {
  createNewWorkout,
  getAllWorkouts,
  getOneWorkout,
  updateOneWorkout,
  deleteOneWorkout,
} from "../../controllers/workout.controller.js";
const router = express.Router();

router
  .get("/", getAllWorkouts)
  .get("/:workoutId", getOneWorkout)
  .post("/", createNewWorkout)
  .patch("/:workoutId", updateOneWorkout)
  .delete("/:workoutId", deleteOneWorkout);

export default router;
