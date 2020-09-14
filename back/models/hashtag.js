module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define("HashTag", {
    name: { type: DataTypes.STRING(20), allowNull: false },
  });
  Hashtag.associate = (db) => {
    db.Hashtag.belongsToMany(db.Project, { through: "ProjectHashtag" });
  };
  return Hashtag;
};
