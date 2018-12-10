const Idea = require('./../models/idea');

const deleteIdea =(req,res)=>{
  
    Idea.deleteOne({
        _id:req.params.id
    }).then(idea=>{
        console.log('successfully deleted');
        req.flash('success_msg',"Idea deleted successfully...")
        res.redirect('/ideas')
    }).catch(err=>console.log('there is some problem deleting idea'))

  }
module.exports ={
    deleteIdea
}