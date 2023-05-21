import express from "express";
import v1WorkoutRouter from "./v1/routes/workout.routes.js";
import { sequalize } from "./database/db.js";

async function main() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  // To be able to parse the sent JSON inside the request body
  // we need a meddleware
  app.use(express.json())
  app.use("/api/v1/workouts", v1WorkoutRouter);

  try {
    await sequalize.sync();

    app.listen(PORT, () => {
      console.log(`\n🚀 API is ready.\nListening on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
