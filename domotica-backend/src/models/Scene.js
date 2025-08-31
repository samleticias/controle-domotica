import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Scene = sequelize.define('Scene', {
  id_scene: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: 'scene',
  timestamps: false
});

export default Scene;