import {
  DataTypes,
  Sequelize,
} from 'sequelize';
import { Otp } from './types/types';
import ejs from 'ejs'
import path from "path";
import { sendMail } from '../services/smtp.service';


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
          console.log(1);
          
          const filePath = path.join(__dirname, '..', 'src', 'views', 'mail', 'otp.ejs')
          console.log(12, data.email);
          
          ejs.renderFile(filePath).then((r: string) => {
            console.log(123);
            sendMail(data.email, "Verification OTP", null, r)
          })
        }
      }
    }
  );

  return Otp;
};