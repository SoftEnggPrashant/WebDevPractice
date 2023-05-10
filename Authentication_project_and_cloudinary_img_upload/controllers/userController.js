const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res, next) => {
	try {
		const { username, email, password, role } = req.body;
		if (!username || !email || !password || !role) {
			return res.status(400).json({
				success: false,
				message: "please provide a username and email or password",
			});
		}

		const userExist = await User.findOne({ email });

		if (userExist) {
			return res.status(409).json({
				success: false,
				message: "user alredy registered",
			});
		}

		const user = await User.create({ username, email, password, role });

		const payload = {
			username: user.username,
			email: user.email,
			id: user._id,
			role: user.role,
		};

		const token = jwt.sign(payload, process.env.JWT_SECRET, {
			expiresIn: process.env.JWT_EXPIRATION,
		});
		res.status(201)
			.cookie("token", token, {
				expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
				httpOnly: true,
			})
			.json({
				success: true,
				message: "user register successfully",
				user,
				token,
			});
	} catch (error) {
		console.log(error.message);
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

exports.login = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({
				success: false,
				message: "please provide email and password",
			});
		}

		const user = await User.findOne({ email });

		console.log(user);

		if (!user) {
			return res.status(401).json({
				success: false,
				message: "user does not exist",
			});
		}

		const comparePassword = await bcrypt.compare(password, user.password);

		console.log(comparePassword);

		if (!comparePassword) {
			return res.status(401).json({
				success: false,
				message: "wrong password",
			});
		}

		const payload = {
			username: user.username,
			email: user.email,
			id: user._id,
			role: user.role,
		};

		const token = jwt.sign(payload, process.env.JWT_SECRET, {
			expiresIn: process.env.JWT_EXPIRATION,
		});

		res.status(200)
			.cookie("token", token, {
				expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
				httpOnly: true,
			})
			.json({
				success: true,
				message: "user logdin successfully",
				user,
				token,
			});
	} catch (error) {
		console.log(error.message);
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

exports.logOut = async (req, res, next) => {
	res.cookie("token", null, {
		expires: new Date(Date.now()),
		httpOnly: true,
	});

	res.status(200).json({
		success: true,
		message: "user logout successfully",
	});
};

exports.authCheck = (req, res, next) => {
	res.json({
		message: "testing auth",
	});
};

exports.adminCheck = (req, res, next) => {
	res.json({
		message: "testing admin",
	});
};

exports.studentCheck = (req, res, next) => {
	res.json({
		message: "testing student",
	});
};
