import { Sequelize } from "sequelize";

const sequalize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

export { sequalize };
