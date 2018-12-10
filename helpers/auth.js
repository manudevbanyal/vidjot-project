

const ensureAuthenticated =(req,res,next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    req.flash('error_msg','please login first')
    res.redirect('/user/login');
}

module.exports={
    ensureAuthenticated
}