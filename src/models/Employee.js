const sequlize = require("sequilize");

const Employee = sequilize.define("Employee", {
	employee_id: {
		type: sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: sequelize.CHAR(64),
		allowNull: false
	},
	age: {
		type: Sequelize.INTEGER,
		allowNull: true
	},
	is_active: {
		type: sequelize.BOOLEAN,
		allowNull: false
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

module.exports = Employee;


