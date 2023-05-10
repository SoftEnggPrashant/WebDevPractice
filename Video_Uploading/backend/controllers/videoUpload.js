const Videos = require("../models/videoModel");
const path = require("path");
const cloudinary = require("cloudinary").v2;

exports.uploadVideo = async (req, res, next) => {
	try {
		const { name } = req.body;
		const { videos } = req.files;

		console.log(name);
		console.log(videos);

		if (!videos || !name) {
			return res.status(500).json({
				success: false,
				message: "please provide all credentials",
			});
		}

		const format = [".mp4", ".mkv", "mov"];

		const ext = path.extname(videos.name).toLowerCase();
		console.log(ext);
		if (!format.includes(ext)) {
			return res.status(500).json({
				success: false,
				message: "Video file format not support",
			});
		}

		const response = await cloudinary.uploader.upload(videos.tempFilePath, {
			folder: "imageAndVideoUploader",
			resource_type: "auto",
		});

		const data = await Videos.create({
			name,
			video: response.secure_url,
		});

		res.status(200).json({
			success: true,
			message: "file upload successfully",
			data,
		});
	} catch (error) {
		console.log(error.message);
		res.status(400).json({
			success: false,
			message: error.message,
		});
	}
};

exports.getAllVideos = async (req, res, next) => {
	try {
		const videos = await Videos.find();

		res.status(200).json({
			success: true,
			message: "videos get successfully",
			data: videos,
		});
	} catch (error) {
		console.log(error.message);

		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};
