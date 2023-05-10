const cloudinary = require("cloudinary").v2;

exports.configCloudinary = () => {
	try {
		cloudinary.config({
			cloud_name: process.env.CLOUDINARY_NAME,
			api_key: process.env.CLOUDINARY_API_KEY,
			api_secret: process.env.CLOUDINARY_API_SECRET,
			secure: true,
		});
	} catch (error) {
		console.error(error);
	}
};
