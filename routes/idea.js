
const express = require('express');
const router = express.Router();
const Idea = require('./../models/idea');

//importing addidea controller..
const {addIdea} = require('./../controllers/addIdea')

//importing getIdea 
const {getIdea} = require('./../controllers/getIdea');

//importing editIdeas
const {editIdeas} = require('./../controllers/editIdea');

//importing UpdateIdeas
const {updateIdea} = require('./../controllers/updateIdea');

// importing DeleteIdeas 
const { deleteIdea } = require('./../controllers/deleteIdea');

//helper funtion
const { ensureAuthenticated } = require('./../helpers/auth');

   
        // getting add route file page..
        router.get('/ideas/add',ensureAuthenticated,(req,res)=>{
            res.render('ideas/add')
        });
 
        // post add routr
        router.post('/ideas',ensureAuthenticated,addIdea);

        // getting data 
        router.get('/ideas',ensureAuthenticated,getIdea);

        //edit idea form 
        router.get('/ideas/edit/:id',ensureAuthenticated,editIdeas);

        //put data 
        router.post('/ideas/:id',ensureAuthenticated,updateIdea)

        //delete data
        router.post('/ideas/delete/:id',ensureAuthenticated,deleteIdea)



// exporting router
module.exports ={
    router
}
