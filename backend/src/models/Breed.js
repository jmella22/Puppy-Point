const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("breed", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};