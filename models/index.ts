import { Sequelize, Dialect } from "sequelize";
import { config } from "../config/config";

import UserModel from './user';
import UserAuthModel from './userAuth';
import RefreshTokenModel from './refreshToken';
import ForgetPasswordModel from './forgetPassword';
import OtpModel from './otp';
import NotificationModel from './notification';
import AdminModel from './admin';
import { DB } from "./types/types";
import { createAssociations } from "../associations/associations";

export const sequelize = new Sequelize(
  config.dbDatabase,
  config.dbUsername,
  config.dbPassword,
  {
    host: config.dbHost,
    port: Number(config.dbPort),
    dialect: config.dbDialect as Dialect,
    logging: false,
  }
);

const db = {} as DB;

db.User = UserModel(sequelize);
db.UserAuth = UserAuthModel(sequelize);
db.RefreshToken = RefreshTokenModel(sequelize);
db.ForgetPassword = ForgetPasswordModel(sequelize);
db.Notification = NotificationModel(sequelize);
db.Otp = OtpModel(sequelize);
db.Admin = AdminModel(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;


const connectWithDB = async (callback: () => void) => {
    try {
        await sequelize.authenticate();
        
        await sequelize.sync();
        createAssociations();
        callback()
    } catch (error) {
        console.log("Error while connection to the database");
        console.log(error);
    }
}

export {
    connectWithDB,
    db
}