module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("Project", {
    name: { type: DataTypes.STRING(50), allowNull: false },
    kind: { type: DataTypes.INTEGER, allowNull: false },
    progress: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    leader: { type: DataTypes.INTEGER, allowNull: false },
    number: { type: DataTypes.INTEGER, allowNull: false },
  });
  Project.associate = (db) => {
    db.Project.hasMany(db.User);
    db.Project.belongsToMany(db.PBoard, { through: "ProjectBoard" });
    db.Project.belongsToMany(db.Hashtag, { through: "ProjectHashtag" });
  };
  return Project;
};
