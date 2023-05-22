import * as workoutService from "../services/workout.service.js";

async function getAllWorkouts(_, res) {
  const allworkouts = await workoutService.getAllWorkouts();
  res.json({ status: "OK", data: allworkouts });
}

async function getOneWorkout(req, res) {
  const { workoutId } = req.params;

  if (!workoutId) {
    return;
  }

  const workout = await workoutService.getOneWorkout(workoutId);
  res.json({ status: "OK", data: workout });
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

async function updateOneWorkout(req, res) {
  const {
    body,
    params: { workoutId },
  } = req;

  if (!workoutId) {
    return;
  }

  const updateWorkout = await workoutService.updateOneWorkout(workoutId, body);
  res.json({ status: "OK", data: updateWorkout });
}

async function deleteOneWorkout(req, res) {
  const { workoutId } = req.params;

  if (!workoutId) {
    return;
  }

  await workoutService.deleteOneWorkout(workoutId);
  res.status(204).json({ status: "OK" });
}

export {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
