const squelize = require("sequelize");

const Position = sequelize.define("Position", {
	position_id: {
		type: sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: sequelize.CHAR(32),
		allowNull: false,
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

module.exports = Position;
