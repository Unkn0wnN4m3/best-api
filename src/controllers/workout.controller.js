import * as workoutService from "../services/workout.service.js";

async function getAllWorkouts(_, res) {
  const allworkouts = await workoutService.getAllWorkouts();
  res.json({ status: "OK", data: allworkouts });
}

function getOneWorkout(_, res) {
  const workout = workoutService.getOneWorkout();
  res.send("Get an existing workout");
}

async function createNewWorkout(req, res) {
  const { body } = req;

  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  const createWorkout = await workoutService.createNewWorkout(newWorkout);
  res.status(201).json({ status: "OK", data: createWorkout });
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
