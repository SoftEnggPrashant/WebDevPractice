const {
	uploadFiles,
	uploadImages,
	uploadVideo,
	uploadImageReduceSize,
} = require("../controllers/uploadController");
const {
	registerUser,
	login,
	authCheck,
	adminCheck,
	studentCheck,
	logOut,
} = require("../controllers/userController");
const { auth, isAdmin, isStudent } = require("../middlewares/auth");

const router = require("express").Router();

router.route("/register").post(registerUser);

router.route("/upload").post(uploadFiles);

router.route("/uploadImage").post(uploadImages);

router.route("/uploadVideo").post(uploadVideo);

router.route("/uploadImageReduceSize").post(uploadImageReduceSize);

router.route("/login").post(login);

router.route("/logout").get(logOut);

router.route("/authcheck").get(auth, authCheck);

router.route("/admincheck").get(auth, isAdmin, adminCheck);

router.route("/studentcheck").get(auth, isStudent, studentCheck);

module.exports = router;
