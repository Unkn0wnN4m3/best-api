import { Workout } from "../database/models/workout.js";

// It's a good practice to name the service methods the same as the controller
// methods so that you have a connection between those.

async function getAllWorkouts() {
  const allProjects = await Workout.findAll();
  return allProjects;
}

function getOneWorkout() {
  return;
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

function updateOneWorkout() {
  return;
}

function deleteOneWorkout() {
  return;
}

export {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
