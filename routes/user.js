const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('./../models/users');

require('./../config/passport')(passport);

const { registerUser } = require('./../controllers/register');



router.get('/user/register',(req,res)=>{
    res.render('users/register')
});

router.post('/user/register',registerUser)

router.get('/user/login',(req,res)=>{
    res.render('users/login')
});

router.post('/user/login',(req,res,next)=>{
    passport.authenticate('local',{
        successRedirect:'/ideas',
        failureRedirect:'/user/login',
        failureFlash:true

    })(req,res,next)
});

router.get('/user/logout',(req,res)=>{


    req.logout();
    req.flash('success_msg','logout successfully...')
    res.redirect('/user/login');

})



module.exports={
    router
}