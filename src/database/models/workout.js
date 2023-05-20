import { DataTypes } from "sequelize";
import { sequalize } from "../db.js";

export const Workout = sequalize.define("workouts", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.TEXT,
    unique: true,
  },
  mode: {
    type: DataTypes.TEXT,
  },
  equipment: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  exercises: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  trainerTips: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
});
