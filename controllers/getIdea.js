
const Idea = require('./../models/idea');

const getIdea =(req,res)=>{

    Idea.find({user:req.user.id})
    .sort({date:'desc'})
    .then(ideas=>{
      
        res.render('ideas/ideas',{ideas});

    })
    .catch(err=>{console.log('there is some error while fetching the files...')})

}


module.exports={
    getIdea
}