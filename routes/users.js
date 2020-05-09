const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller')
const postsController = require('../controllers/posts_controller')


router.get("/profile",usersController.users);
router.get("/posts",postsController.posts);

module.exports = router;