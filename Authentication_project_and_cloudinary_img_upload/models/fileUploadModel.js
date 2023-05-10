const mongoose = require("mongoose");
const { configNodemailer } = require("../config/nodemailerConfig");

const fileSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	public_id: {
		type: String,
	},
});

fileSchema.post("save", async function (doc) {
	console.log("doc", doc);

	try {
		const transporter = configNodemailer();

		const info = await transporter.sendMail({
			from: process.env.MAIL_USER,
			to: doc.email,
			subject: "file upload on cloudinary successfully",
			html: `<p><h3>File upload on cloudinary successfully</h3> <a href="${doc.imageUrl}"> View : ${doc.imageUrl}</a></p>`,
		});
	} catch (error) {
		console.error(error);
	}
});

module.exports = mongoose.model("fileUpload", fileSchema);
