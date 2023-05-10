const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		video: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = Videos = mongoose.model("Videos", videoSchema);
