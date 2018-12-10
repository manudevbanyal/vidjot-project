
const express = require('express');
const router = express.Router();

// importing getIndex controller
const {getIndex} = require('./../controllers/indexControllers');

router.get('/',getIndex);
module.exports={
    router
}
