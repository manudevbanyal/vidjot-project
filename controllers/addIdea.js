
// importing idea data models...
const Idea = require('./../models/idea');

// adding ideas to the database
const addIdea =(req,res)=>{
    let errors =[];
    if(!req.body.title){
        errors.push({text:"please provide title"})
    }
    if(!req.body.details){
        errors.push({text:"please provide details"})
    }
    if(errors.length>0){
        res.render('ideas/add',{
            title:req.body.title,
            details:req.body.details,
            errors:errors
        })
    }else{
        let newIdea = {
            title:req.body.title,
            details:req.body.details,
            user :req.user.id
        }
        let user =new Idea(newIdea);
        user.save()
        .then(data=>{
            console.log('idea successfully saved');
            req.flash('success_msg',"Idea added successfully...")
            res.redirect('/ideas')
        })
        .catch(err=>console.log(err))
    }
  }

module.exports ={
    
    addIdea
}