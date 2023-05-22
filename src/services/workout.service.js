import { Workout } from "../database/models/workout.js";

// It's a good practice to name the service methods the same as the controller
// methods so that you have a connection between those.

async function getAllWorkouts() {
  const allWorkouts = await Workout.findAll();
  if (allWorkouts.length === 0) {
    throw new Error("No workouts added");
  }
  return allWorkouts;
}

async function getOneWorkout(workout) {
  const oneWorkout = await Workout.findOne({
    where: {
      id: workout,
    },
  });
  if (!oneWorkout) throw new Error("Workout doesn't exists");
  return oneWorkout;
}

async function createNewWorkout(workout) {
  const { name, mode, equipment, exercises, trainerTips } = workout;
  const newWorkout = await Workout.create({
    name,
    mode,
    equipment,
    exercises,
    trainerTips,
  });
  return newWorkout;
}

async function updateOneWorkout(workoutId, body) {
  const updatedWorkout = await Workout.findByPk(workoutId);
  if (!updatedWorkout) throw new Error("Workout doesn't exists");
  updatedWorkout.set(body);
  await updatedWorkout.save();
  return updatedWorkout;
}

async function deleteOneWorkout(workoutId) {
  const deletedWorkout = await Workout.findByPk(workoutId);
  if (!deletedWorkout) throw new Error("Workout doesn't exists");
  await deletedWorkout.destroy();
}

export {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
