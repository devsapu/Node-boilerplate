const express = require('express');
const userController = require('../controllers/userController');
const authenticate =require('../middlewares/authenticate.js')

const router = express.Router();

router.post('/signin', userController.signin);
router.post('/login',userController.login);
router.get('/me', authenticate, userController.getUser);

module.exports = router;
