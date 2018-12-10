
const express = require('express');
const router = express.Router();

// importing getabout controller
const {getabout} = require('./../controllers/aboutControllers');

router.get('/about',getabout);

module.exports={
    router
}