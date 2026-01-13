import {
  Model,
  DataTypes,
  Sequelize,
  Optional
} from 'sequelize';
import { Otp } from './types/types';

export default (sequelize: Sequelize): typeof Otp => {
  Otp.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      otp: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: 'otps',
      timestamps: true,
      createdAt: 'created_at',
      hooks: {
        afterCreate: async (data) => {
            if(data.dataValues.email) {
              // send otp via mail
            } else {
              // send otp via sms
            }
        }
      }
    }
  );

  return Otp;
};