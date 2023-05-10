const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.auth = async (req, res, next) => {
	const { token } = req.cookies || req.body;

	if (!token) {
		res.status(401).json({
			success: false,
			message: "Token is required please login",
		});
	}

	const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
	const user = await User.findById(decodedUser.id);
	req.user = user;
	next();
};

exports.isStudent = (req, res, next) => {
	if (req.user.role != "student") {
		return res.status(401).json({
			success: false,
			message: "user is not a student",
		});
	}
	next();
};

exports.isAdmin = (req, res, next) => {
	if (req.user.role != "admin") {
		res.status(401).json({
			success: false,
			message: "user is not a Admin",
		});
	}
	next();
};
