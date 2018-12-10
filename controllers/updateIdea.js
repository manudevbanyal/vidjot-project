
const Idea  = require('./../models/idea');

const updateIdea=(req,res)=>{
       
    Idea.findOne({
        _id:req.params.id
    })
    .then(idea=>{
        idea.title = req.body.title;
        idea.details =req.body.details;

        idea.save()
        .then(data=>{
            console.log('successfully updated');
            req.flash('success_msg',"Idea updated successfully...")
            res.redirect('/ideas')
        })
        .catch(err=>console.log('error updating idea'))

    })
    .catch(err=>console.log(err))


 }


module.exports = {
    updateIdea
}