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
    db.Project.hasMany(db.Schedule);
    db.Project.hasMany(db.PBoard);
    db.Project.hasMany(db.Todo);
    db.Project.hasMany(db.Image);
    db.Project.belongsToMany(db.Hashtag, { through: "ProjectHashtag" });
  };
  return Project;
};
