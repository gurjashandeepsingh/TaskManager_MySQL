export default (sequelize, DataTypes) => {
  const Session = sequelize.define("Session", {
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Session;
};
