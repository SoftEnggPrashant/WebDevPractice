const fileUpload = require("../models/fileUploadModel");
const path = require("path");
const cloudinary = require("cloudinary").v2;

exports.uploadFiles = async (req, res, next) => {
	try {
		const file = req.files.file;

		const path = `${__dirname
			.toString()
			.replace("/controllers", "")}/public/files/${
			Date.now() + file.name
		}`;

		if (file.size > 500000) {
			return res.status(500).json({
				success: false,
				message: "size exceeded",
			});
		}

		file.mv(path, (err) => {
			if (err) {
				res.status(500).json({
					success: false,
					message: err.message,
				});
			}
			res.status(200).json({
				success: true,
				message: "file upload successfully",
			});
		});
	} catch (error) {
		console.log(error.message);
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

exports.uploadImages = async (req, res) => {
	try {
		const { name, description, email } = req.body;
		const imageFile = req.files.imageFile;

		if (!imageFile || !name || !description || !email) {
			return res.status(500).json({
				success: false,
				message: "please provide all credentials",
			});
		}

		const format = [".png", ".jpg", ".jpeg", ".gif", ".webp"];
		const ext = path.extname(imageFile.name);

		if (!format.includes(ext)) {
			return res.status(500).json({
				success: false,
				message: "file format not support",
			});
		}

		const response = await cloudinary.uploader.upload(
			imageFile.tempFilePath,
			{
				folder: "imageAndVideoUploader",
				resource_type: "auto",
				use_filename: true,
			}
		);

		const data = await fileUpload.create({
			name,
			description,
			email,
			public_id: response.public_id,
			imgaeUrl: response.secure_url,
		});

		res.status(200).json({
			success: true,
			message: "file upload successfully",
			data,
		});
	} catch (error) {
		console.log(error.message);
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

exports.uploadVideo = async (req, res) => {
	try {
		const { name, description, email } = req.body;
		const videoFile = req.files.vedioFile;

		console.log("video file", videoFile);

		if (!videoFile || !name || !description || !email) {
			return res.status(500).json({
				success: false,
				message: "please provide all credentials",
			});
		}

		const format = [".mp4", ".mkv", "mov"];
		const ext = path.extname(videoFile.name).toLowerCase();

		if (!format.includes(ext)) {
			return res.status(500).json({
				success: false,
				message: "Video file format not support",
			});
		}

		const response = await cloudinary.uploader.upload(
			videoFile.tempFilePath,
			{
				folder: "imageAndVideoUploader",
				resource_type: "auto",
			}
		);

		console.log("response", response);

		const data = await fileUpload.create({
			name,
			description,
			email,
			public_id: response.public_id,
			imgaeUrl: response.secure_url,
		});

		console.log("data", data);

		res.status(200).json({
			success: true,
			message: "file upload successfully",
			data,
		});
	} catch (error) {
		console.log(error.message);
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

exports.uploadImageReduceSize = async (req, res) => {
	try {
		const { name, description, email } = req.body;
		const imageFile = req.files.imageFile;

		if (!imageFile || !name || !description || !email) {
			return res.status(500).json({
				success: false,
				message: "please provide all credentials",
			});
		}

		const format = [".png", ".jpg", ".jpeg", ".gif", ".webp"];
		const ext = path.extname(imageFile.name).toLowerCase();

		if (!format.includes(ext)) {
			return res.status(500).json({
				success: false,
				message: "file format not support",
			});
		}

		const response = await cloudinary.uploader.upload(
			imageFile.tempFilePath,
			{
				folder: "imageAndVideoUploader",
				resource_type: "auto",
				use_filename: true,
				quality: 30,
			}
		);

		const data = await fileUpload.create({
			name,
			description,
			email,
			public_id: response.public_id,
			imageUrl: response.secure_url,
		});

		res.status(200).json({
			success: true,
			message: "file upload successfully",
			data,
		});
	} catch (error) {
		console.log(error.message);
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};
