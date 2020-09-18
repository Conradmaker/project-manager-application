module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: { type: DataTypes.STRING(30), allowNull: false, unique: true },
      nickname: { type: DataTypes.STRING(30), allowNull: false },
      password: { type: DataTypes.STRING(100), allowNull: false },
      grade: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      position: { type: DataTypes.STRING(30), allowNull: false },
      completed: { type: DataTypes.INTEGER, defaultValue: 0 },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci", //한글저장
    }
  );
  User.associate = (db) => {
    db.User.belongsTo(db.Project);
  };
  return User;
};
