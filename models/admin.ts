import { DataTypes, Sequelize } from "sequelize";
import { Admin } from "./types/types";

export default (sequelize: Sequelize): typeof Admin => {
  Admin.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
      },
      token: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password_hash: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'admins',
      timestamps: false,
      sequelize,
    }
  );

  return Admin;
};