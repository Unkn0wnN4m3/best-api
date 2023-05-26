import express from "express";
import v1WorkoutRouter from "./v1/routes/workout.routes.js";

const app = express();

// To be able to parse the sent JSON inside the request body
// we need a meddleware
app.use(express.json());
app.use("/api/v1/workouts", v1WorkoutRouter);

export default app;
