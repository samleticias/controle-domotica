import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const House = sequelize.define('House', {
  id_house: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'house',
  timestamps: false
});

export default House;