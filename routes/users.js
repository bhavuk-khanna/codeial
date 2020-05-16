const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller')
const postsController = require('../controllers/posts_controller')

router.get("/",usersController.users);
router.get("/signup",usersController.signUp);
router.get("/signin",usersController.signIn);
router.post("/create", usersController.create);




router.get("/posts",postsController.posts);

module.exports = router;