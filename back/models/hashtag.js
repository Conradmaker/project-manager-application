module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define("HashTag", {
    name: { type: DataTypes.STRING(20), allowNull: false },
  });
  Hashtag.associate = (db) => {};
  return Hashtag;
};
