const router = require('express').Router();
const { createComment, getAllComments, updateComment, deleteComment } = require('../controllers/commentController');

router.route('/new/comment').post(createComment);

router.route('/getAllComments/:id').get(getAllComments);

router.route('/update/comment/:id').put(updateComment);

router.route('/delete/comment/:id').delete(deleteComment);

module.exports = router;