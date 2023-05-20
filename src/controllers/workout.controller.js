import * as workoutService from "../services/workout.service.js";

async function getAllWorkouts(_, res) {
  const allworkouts = await workoutService.getAllWorkouts();
  res.send({ status: "OK", data: allworkouts });
}
function getOneWorkout(_, res) {
  const workout = workoutService.getOneWorkout();
  res.send("Get an existing workout");
}
function createNewWorkout(_, res) {
  const createWorkout = workoutService.createNewWorkout();
  res.send("Create a new workout");
}
function updateOneWorkout(_, res) {
  const updateWorkout = workoutService.updateOneWorkout();
  res.send("Update an existing workout");
}
function deleteOneWorkout(_, res) {
  workoutService.deleteOneWorkout();
  res.send("Delete an existing workout");
}

export {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
