const express = require('express');
const router = express.Router();
const room = require('../models/Room')

router.get('/', async(req,res) =>{
    try{
        const roomData = await room.find();
        res.json(roomData);
    }catch(err){
        res.json({message:err});
    }
});

module.exports = router;