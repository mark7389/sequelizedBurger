module.exports = function(sequelize, DataTypes){

	var customer = sequelize.define("customer", {

		customer_name: {

				type: DataTypes.STRING,
				allowNull: false,

		}

	});

	customer.associate = function(models){

		customer.hasMany(models.burger, {
      	onDelete: "cascade"
    });
	}

	return customer;

}