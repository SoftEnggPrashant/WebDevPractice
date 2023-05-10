const app = require("./app");
const dotenv = require("dotenv");
const { DatabaseConnect } = require("./config/databaseConnection");
const { configCloudinary } = require("./config/cloudinaryConfig");

dotenv.config({ path: "./backend/config/config.env" });

app.listen(process.env.PORT || 3000, () => {
	console.log(`server running on http://localhost:${process.env.PORT}`);
});

// config cloudinary
configCloudinary();

// database connect
DatabaseConnect();
