const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
db.User = require("./user")(sequelize, Sequelize);
db.Project = require("./project")(sequelize, Sequelize);
db.EComment = require("./eComment")(sequelize, Sequelize);
db.EBoard = require("./eBoard")(sequelize, Sequelize);
db.PBoard = require("./pBoard")(sequelize, Sequelize);
db.Image = require("./Image")(sequelize, Sequelize);
db.Hashtag = require("./hashtag")(sequelize, Sequelize);
db.Schedule = require("./schedule")(sequelize, Sequelize);
db.Todo = require("./todoList")(sequelize, Sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
