const router = require("express").Router();
const { uploadVideo, getAllVideos } = require("../controllers/videoUpload");

router.route("/upload/media").post(uploadVideo);

router.route("/getMedia").get(getAllVideos);

module.exports = router;
