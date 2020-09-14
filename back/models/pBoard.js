module.exports = (sequelize, DataTypes) => {
  const PBoard = sequelize.define("PBoard", {
    title: { type: DataTypes.STRING(50), allowNull: false },
    content: { type: DataTypes.TEXT, allowNull: false },
    kind: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
  });

  PBoard.associate = (db) => {};
  return PBoard;
};
