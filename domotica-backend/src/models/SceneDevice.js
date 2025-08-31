import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Scene from './Scene.js';
import Device from './Device.js';

const SceneDevice = sequelize.define('SceneDevice', {
  id_scene_device: { // chave primária
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_scene: { // id da cena
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: Scene, key: 'id_scene' },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  },
  id_device: { // id do dispositivo
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: Device, key: 'id_device' },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  },
  order: DataTypes.INTEGER,
  interval: DataTypes.INTEGER,
  action: DataTypes.ENUM('turn_on', 'turn_off')
}, {
  tableName: 'scene_device',
  timestamps: false
});

Scene.hasMany(SceneDevice, { foreignKey: 'id_scene' });
SceneDevice.belongsTo(Scene, { foreignKey: 'id_scene' });
Device.hasMany(SceneDevice, { foreignKey: 'id_device' });
SceneDevice.belongsTo(Device, { foreignKey: 'id_device' });

export default SceneDevice;