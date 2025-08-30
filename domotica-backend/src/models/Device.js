import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Room from './Room.js';

const Device = sequelize.define('Device', {
  id_device: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  id_room: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Room,
      key: 'id_room'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
}, {
  tableName: 'device',
  timestamps: false
});

Room.hasMany(Device, { foreignKey: 'id_room' }); // cômodo pode ter vários dispositivos
Device.belongsTo(Room, { foreignKey: 'id_room' }); // dispositivo pertence a um cômodo

export default Device;
