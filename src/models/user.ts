import {
  Model,
  DataTypes,
  Sequelize,
  Optional
} from 'sequelize';
import { User } from './types/types';

export default (sequelize: Sequelize): typeof User => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: true
      },
      is_email_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      sequelize,
      tableName: 'users',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  );

  return User;
};