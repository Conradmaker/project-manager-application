module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define("Schedule", {
    title: { type: DataTypes.STRING(30), allowNull: false },
    startAt: { type: DataTypes.DATE, allowNull: false },
    endAt: { type: DataTypes.DATE, allowNull: false },
  });

  Schedule.associate = (db) => {
    db.Schedule.belongsTo(db.Project);
  };
  return Schedule;
};
