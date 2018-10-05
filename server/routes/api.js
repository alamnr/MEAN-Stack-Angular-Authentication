const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user')

const db = "mongodb://alamnr:alamnr5640@ds223253.mlab.com:23253/eventsdb"


mongoose.connect(db,err=>{
    if(err){
        console.log('Err!'+err);
    }
    else{
        console.log('Connected to mongodb');
    }
});

router.get('/',(req,res)=>{
    res.send('From API Route');
});

router.post('/register',(req,res)=>{
    let  userData = req.body;
    let user = new User(userData);
    user.save((error,registeredUser)=>{
        if(error){
            console.log('Error Saving user: '+ error);
        }
        else{
            res.status(200).send(registeredUser);
        }
    });
})

module.exports = router;