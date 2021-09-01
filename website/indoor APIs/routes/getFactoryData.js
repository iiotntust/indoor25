const express = require('express');
const router = express.Router();
const factory = require('../models/Factory')

router.get('/', async(req,res) =>{
    try{
        const factoryData = await factory.find();
        res.json(factoryData);
    }catch(err){
        res.json({message:err});
    }
});

module.exports = router;