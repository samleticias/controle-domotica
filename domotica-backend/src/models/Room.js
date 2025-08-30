import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import House from './House.js';

const Room = sequelize.define('Room', {
  id_room: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_house: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: House,
      key: 'id_house'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
}, {
  tableName: 'room',
  timestamps: false
});

House.hasMany(Room, { foreignKey: 'id_house' });
Room.belongsTo(House, { foreignKey: 'id_house' });

export default Room;
