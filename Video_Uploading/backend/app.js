const express = require("express");
const cors = require("cors");
const uploadRoute = require("./routes/uploadRoutes");

const fileUpload = require("express-fileupload");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
	})
);

app.use("/api/v1", uploadRoute);

module.exports = app;
