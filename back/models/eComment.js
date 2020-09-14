module.exports = (sequelize, DataTypes) => {
  const EComments = sequelize.define(
    "EComments",
    {
      content: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      charset: "utf8mb4", //mb4-이모티콘
      collate: "utf8mb4_general_ci", //한글,이모티콘저장
    }
  );

  EComments.associate = (db) => {};
  return EComments;
};
