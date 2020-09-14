module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("Project", {
    name: { type: DataTypes.STRING(50), allowNull: false },
    kind: { type: DataTypes.INTEGER, allowNull: false },
    progress: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  });
  Project.associate = (db) => {};
  return Project;
};
