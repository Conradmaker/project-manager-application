module.exports = (sequelize, DataTypes) => {
  const EComment = sequelize.define(
    "EComment",
    {
      content: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      charset: "utf8mb4", //mb4-이모티콘
      collate: "utf8mb4_general_ci", //한글,이모티콘저장
    }
  );

  EComment.associate = (db) => {
    db.EComment.belongsTo(db.User);
    db.EComment.belongsToMany(db.EBoard, { through: "EmployeComment" });
  };
  return EComment;
};
