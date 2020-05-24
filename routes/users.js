const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controllers/users_controller')
const postsController = require('../controllers/posts_controller')

router.get("/",usersController.users);
router.get("/signup",usersController.signUp);
router.get("/signin",usersController.signIn);
router.post("/create", usersController.create);
router.get('/profile',passport.checkAuthentication,usersController.profile);
//use passport as a middleware to authenticate 
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect: '/users/signin'}),
    
usersController.createSession);

router.get('/sign-out',usersController.destroySession);
router.get("/posts",postsController.posts);



module.exports = router;