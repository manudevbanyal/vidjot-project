
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('./../models/users');



module.exports = function(passport){

    passport.use(new LocalStrategy({usernameField:'email'},(email,password,done)=>{
        User.findOne({
            email:email
        }).then(user=>{

            if(!user){
                return done(null,false,{message:'no user found...'})
            }
            bcrypt.compare(password,user.password,(err,isMatch)=>{
                if(err) return done(null,false,{message:"password do not match..."})
                if(isMatch){
                     return done(null,user)
                }else{
                    return done(null,false,{message:"password Incorrect..."})
                }
            })
        }).catch(err=>console.log(err))
        
    }))
    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });

}