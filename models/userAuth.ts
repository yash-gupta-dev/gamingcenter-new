import { DataTypes, Op, Sequelize } from "sequelize";
import { USER_AUTH_PROVIDERS } from "../constants/constants";
import { UserAuth } from "./types/types";

export default (sequelize: Sequelize): typeof UserAuth => {
  UserAuth.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      provider: {
        type: DataTypes.ENUM(USER_AUTH_PROVIDERS.EMAIL, USER_AUTH_PROVIDERS.GOOGLE),
        allowNull: false
      },
      provider_id: {
        type: DataTypes.STRING,
        allowNull: true
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      sequelize,
      tableName: 'user_auth',
      timestamps: true,
      createdAt: 'created_at',
      indexes: [
        {
          unique: true,
          fields: ['user_id', 'provider']
        },
        {
          unique: true,
          fields: ['provider', 'provider_id'],
          where: {
            provider_id: { [Op.ne]: null }
          }
        }
      ]
    }
  );

  return UserAuth;
};