
   const bcrypt = require('bcryptjs');
   const User = require('./../models/users');


   const registerUser =(req,res)=>{

    User.findOne({
        email:req.body.email
    }).then(data=>{
        if(data){
            req.flash('error_msg',"email already registered..")
            res.redirect('/user/register')
        }else{
  
             let errors =[];

            if(req.body.password.length < 4){
                errors.push({text:"password is at least of 4 characters"})
            }

            if(req.body.password !== req.body.password2){
                errors.push({text:"password does not match.."})
            }
       
             if(errors.length > 0){
                 res.render('users/register',{
                     errors:errors,
                     name:req.body.name,
                     email:req.body.email,
                     password:req.body.password
                 })
             }else{

 
                 const user ={
                     name:req.body.name,
                     email:req.body.email,
                     password:req.body.password
                 }
                 bcrypt.genSalt(10,(err,salt)=>{

                    bcrypt.hash(user.password,salt,(err,hash)=>{

                        user.password = hash;

                        const newUser = new User(user);
                        newUser.save()
                          .then(info=>{
                              console.log('successfully saved...');
                              req.flash('success_msg',"user registered successfully...")
                              res.redirect('/user/login');
                          })
                          .catch(err=>{
                              console.log(err)
                          })

                    })

                 })


                 
  

             }


        }
    }).catch(err=>{
        console.log(err)
    })


}





   module.exports={
       registerUser
   }