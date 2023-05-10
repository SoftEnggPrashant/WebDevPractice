const app = require("./app");
const dotenv = require("dotenv");
const { connectDatabase } = require("./config/database");
const { configCloudinary } = require("./config/cloudinary");

dotenv.config({ path: "./config/config.env" });

app.listen(process.env.PORT || 4000, () => {
	console.log(`server running on http://localhot:${process.env.PORT}`);
});

// configuration clodinary
configCloudinary();

// connect db
connectDatabase();
