const sequelize = require("sequelize");

const Shop = sequelize.define("Shop", {
	shop_id: {
		type: sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoincrement: true
	},
	name: {
		type: sequelize.CHAR(64),
		allowNull: false
	},
	address: {
		type: sequelize.CHAR(255),
		allowNull: false
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

module.exports = Shop;
