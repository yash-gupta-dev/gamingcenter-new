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
        type: DataTypes.BOOLEAN,
      },
      email: {
        type: DataTypes.BOOLEAN,
      },
      passowrd_hash: {
        type: DataTypes.BOOLEAN,
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