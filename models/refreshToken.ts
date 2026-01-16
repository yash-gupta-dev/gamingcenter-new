import { DataTypes, Op, Sequelize } from "sequelize";
import { RefreshToken } from "./types/types";

export default (sequelize: Sequelize): typeof RefreshToken => {
    RefreshToken.init(
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
            token_hash: {
                type: DataTypes.STRING,
                allowNull: false
            },
            user_agent: {
                type: DataTypes.STRING,
                allowNull: true
            },
            expires_at: {
                type: DataTypes.DATE,
                allowNull: false
            },

            revoked_at: {
                type: DataTypes.DATE,
                allowNull: true
            }
        },
        {
            sequelize,
            tableName: 'refresh_token',
            timestamps: true,
            createdAt: 'created_at',
            indexes: [
                { fields: ['user_id'] },
                { fields: ['token_hash'] },
                { fields: ['expires_at'] }
            ]
        }
    );

    return RefreshToken;
};