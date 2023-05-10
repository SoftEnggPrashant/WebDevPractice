const mongoose = require("mongoose");

exports.connectDatabase = () => {
	mongoose
		.connect(process.env.DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then((connection) => {
			console.log(`database connection: ${connection.connection.host}`);
		})
		.catch((error) => {
			console.error(error.message);
			process.exit(1);
		});
};
