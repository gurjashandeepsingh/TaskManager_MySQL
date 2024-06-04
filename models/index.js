import { Sequelize } from "sequelize";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const config = require("../config/config.json").development;
import dotenv from "dotenv";
dotenv.config();

import UserModel from "./user.js";
import OrganizationModel from "./organization.js";
import RoleModel from "./role.js";
import SessionModel from "./session.js";
import TaskModel from "./task.js";

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = UserModel(sequelize, Sequelize);
db.Organization = OrganizationModel(sequelize, Sequelize);
db.Role = RoleModel(sequelize, Sequelize);
db.Session = SessionModel(sequelize, Sequelize);
db.Task = TaskModel(sequelize, Sequelize);

db.User.belongsToMany(db.Organization, { through: "UserOrganizations" });
db.Organization.belongsToMany(db.User, { through: "UserOrganizations" });
db.User.belongsTo(db.Role);
db.Task.belongsTo(db.Organization);
db.Organization.hasMany(db.Task);

export default db;
