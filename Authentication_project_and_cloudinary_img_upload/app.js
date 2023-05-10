const express = require("express");
const userRoute = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
	})
);

app.use("/api/v1", userRoute);

module.exports = app;
exports.__dirname;
