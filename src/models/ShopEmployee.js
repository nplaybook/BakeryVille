const sequelize = require("sequelize")

const ShopEmployee = sequelize.define("ShopEmployee", {
    shop_employee_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true
    },
    shop_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "Shop",
            key: "shop_id"
        }
    },
    employee_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "Employee",
            key: "employee_id"
        }
    },
    position_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "Position",
            key: "position_id"
        }
    },
    create_date: {
        type: sequelize.DATE,
        allowNull: false
    },
    update_date: {
        type: sequelize.DATE,
        allowNull: false
    }
});

module.exports = ShopEmployee;