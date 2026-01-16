import { DataTypes, Sequelize } from "sequelize";
import { Game } from "./types/types";

export default (sequelize: Sequelize): typeof Game => {
  Game.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      gameEngine: {
        type: DataTypes.STRING,
        allowNull: false
      },
      mobile_support: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      multiplayer: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
    },
    {
      timestamps: true,
      tableName: 'games',
      sequelize,
    }
  );

  return Game;
};