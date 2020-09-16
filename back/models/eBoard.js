module.exports = (sequelize, DataTypes) => {
  const EBoard = sequelize.define(
    "EBoard",
    {
      content: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      charset: "utf8mb4", //mb4-이모티콘
      collate: "utf8mb4_general_ci", //한글,이모티콘저장
    }
  );

  EBoard.associate = (db) => {
    db.EBoard.belongsTo(db.Project);
    db.EBoard.belongsToMany(db.EComment, { through: "EmployeComment" });
    db.EBoard.belongsTo(db.User);
  };
  return EBoard;
};
