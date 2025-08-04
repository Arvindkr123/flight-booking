import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Airplane extends Model {
    static associate(models) {
      // define associations if needed
      // example: Airplane.hasMany(models.Flight);
    }
  }

  Airplane.init(
    {
      modelNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Airplane",
      tableName: "Airplanes", // optional (Sequelize will pluralize by default)
    }
  );

  return Airplane;
};
