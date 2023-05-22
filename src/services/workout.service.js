import { Workout } from "../database/models/workout.js";

// It's a good practice to name the service methods the same as the controller
// methods so that you have a connection between those.

async function getAllWorkouts() {
  const allProjects = await Workout.findAll();
  return allProjects;
}

async function getOneWorkout(workout) {
  const oneWorkout = await Workout.findOne({
    where: {
      id: workout,
    },
  });
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
  const updateWorkout = await Workout.update(body, {
    where: {
      id: workoutId,
    },
  });
  return updateWorkout;
}

async function deleteOneWorkout(workoutId) {
  await Workout.destroy({
    where: {
      id: workoutId,
    },
  });
}

export {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
