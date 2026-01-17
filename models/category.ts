import {
  DataTypes,
  Sequelize,
} from 'sequelize';
import { Category } from './types/types';

export default (sequelize: Sequelize): typeof Category => {
  Category.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: 'categories',
      timestamps: false
    }
  );

  return Category;
};