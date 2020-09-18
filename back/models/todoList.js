module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define("Todo", {
    content: { type: DataTypes.STRING(30), allowNull: false },
    done: { type: DataTypes.BOOLEAN, defaultValue: false },
  });

  Todo.associate = (db) => {
    db.Todo.belongsTo(db.Project);
    db.Todo.belongsTo(db.User);
  };
  return Todo;
};
