
const Idea = require('./../models/idea');

const editIdeas = (req,res)=>{

    Idea.findOne({
        _id:req.params.id
    })
    .then(idea=>{

        if(idea.user !== req.user.id){
            req.flash('error_msg','not authorized');
            res.redirect('/ideas')
        }else{
            res.render('ideas/edit',{idea:idea})
        }
    
   
    })
    .catch(err=>{console.log('there is some error finding that data')})

 }

 module.exports={
     editIdeas
 }