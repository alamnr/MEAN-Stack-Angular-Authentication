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

router.post('/login', (req, res)=>{
    let userData = req.body;
    User.findOne({email:userData.email},(err,user)=>{
        if(err){
            console.log(err);
        }
        else{
            if(!user){
                res.status(401).send('Invalid Email');
            } else{
                if(user.password !== userData.password){
                    res.status(401).send('Invalid password');
                }else{
                    res.status(200).send(user);
                }
            }
        }
    });
});

router.get('/events',(req,res)=>{
    let events = [
        {
            "_id":"1",
            "name":"Auto Expo",
            "description": "lorem ipsum",
            "date":"2012-04-23T18:25:43.511Z"
        },
        {
            "_id":"2",
            "name":"Auto Expo",
            "description": "lorem ipsum",
            "date":"2012-04-23T18:25:43.511Z"
        },
        {
            "_id":"3",
            "name":"Auto Expo",
            "description": "lorem ipsum",
            "date":"2012-04-23T18:25:43.511Z"
        },
        {
            "_id":"4",
            "name":"Auto Expo",
            "description": "lorem ipsum",
            "date":"2012-04-23T18:25:43.511Z"
        }
    ];
    res.json(events);
})

module.exports = router;