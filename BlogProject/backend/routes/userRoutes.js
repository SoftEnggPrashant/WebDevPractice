const { registerUser } = require('../controllers/userConteroller');

const router = require('express').Router();


router.route('/register/user').post(registerUser);


module.exports = router;