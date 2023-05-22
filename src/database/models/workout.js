import { DataTypes } from "sequelize";
import { sequalize } from "../db.js";

export const Workout = sequalize.define("workouts", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.TEXT,
    unique: true,
  },
  mode: {
    type: DataTypes.TEXT,
  },
  equipment: {
    type: DataTypes.JSON,
  },
  exercises: {
    type: DataTypes.JSON,
  },
  trainerTips: {
    type: DataTypes.JSON,
  },
});
