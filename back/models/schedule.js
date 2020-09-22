module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define("Schedule", {
    title: { type: DataTypes.STRING(30), allowNull: false },
    start: { type: DataTypes.STRING(30), allowNull: false },
    end: { type: DataTypes.STRING(30), allowNull: false },
    allDay: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
  });

  Schedule.associate = (db) => {
    db.Schedule.belongsTo(db.Project);
  };
  return Schedule;
};
