const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getAllUsers);//display all users

router.get('/edit/:id', userController.getOneUser);//display update user page

router.get('/add', userController.getAddUserPage);//add new user page rendering

router.post('/add', userController.PostNewUser);//add new user

router.post('/edit/:id', userController.updateUser);//update a user 

router.get('/delete/:id', userController.deleteUser);//delete a user
module.exports = router;