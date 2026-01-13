import { DataTypes, Op, Sequelize } from "sequelize";
import { ForgetPassword } from "./types/types";

export default (sequelize: Sequelize): typeof ForgetPassword => {
    ForgetPassword.init(
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
            expires_at: {
                type: DataTypes.DATE,
                allowNull: false
            },
            used_at: {
                type: DataTypes.DATE,
                allowNull: true
            },
        },
        {
            sequelize,
            tableName: 'forget_passwords',
            timestamps: true,
            createdAt: 'created_at',
            indexes: [
                { fields: ['user_id'] },
                { fields: ['token_hash'] },
                { fields: ['expires_at'] }
            ]
        }
    );

    return ForgetPassword;
};