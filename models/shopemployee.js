'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  ShopEmployee.init({
    shop_employee_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    shop_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Shop,
        key: 'shop_id'
      }
    },
    employee_id: {
      type:DataTypes.INTEGER,
      references: {
        model: Employee,
        key: 'employee_id'
      }
    },
    position_id: {
      type:DataTypes.INTEGER,
      references: {
        model: Position,
        key: 'position_id'
      }
    },
    create_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    update_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'ShopEmployee',
  });
  return ShopEmployee;
};