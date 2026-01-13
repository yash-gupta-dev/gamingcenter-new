import { DataTypes, Sequelize } from "sequelize";
import { Notification } from "./types/types";
 
export default (sequelize: Sequelize): typeof Notification => {
  Notification.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false
      },
      is_read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
    },
    {
      timestamps: true,
      createdAt: 'sent_at',
      tableName: 'notifications',
      sequelize,
    }
  );

  return Notification;
};