const { blogLiked, dislikeBlog, removeLike, removeDislike } = require('../controllers/likeController');

const router = require('express').Router();

router.route('/blog/like').post(blogLiked);

router.route('/blog/dislike/:id').post(dislikeBlog);

router.route('/blog/removelike').post(removeLike);

router.route('/blog/removeDislike/:id').post(removeDislike);

module.exports = router;