const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();

const allGroceries=require('../models/allGroceries')
const offerGroceries=require('../models/offerGroceries')
const categories=require('../models/categories');
const user = require("../models/user");

// Routes
router.get('/',(req,res)=>{
    allGroceries.find({})
    .then((data)=>{
        console.log('Data:'+data);
    res.json(data);
    }).catch((error)=>{
        console.log('Error:'+error)
    })
})

router.get('/offer',(req,res)=>{
    allGroceries.find({offer:true})
    .then((data)=>{
        console.log('Data:'+data);
    res.json(data);
    }).catch((error)=>{
        console.log('Error:'+error)
    })
})

router.get('/categories',(req,res)=>{
    categories.find({})
    .then((data)=>{
        console.log('Data:'+data);
    res.json(data);
    }).catch((error)=>{
        console.log('Error:'+error)
    })
})

router.get('/users',(req,res)=>{
    user.find({})
    .then((data)=>{
        console.log('Data:'+data);
    res.json(data);
    }).catch((error)=>{
        console.log('Error:'+error)
    })
})

router.get('/user/login',(req,res)=>{
    console.log()

    user.find({email:req.query.email})
    .then((data)=>{
    res.json(data);
    }).catch((error)=>{
        console.log('Error:'+error)
    })
})

router.post('/user/new',(req,res)=>{
    const newUser=new user(req.body);
    newUser.save((error,result)=>{
        if(error){
            res.send(error)
            return console.log(error)
        }
        res.send(result)
    })
   
})

router.post('/user/edit',(req,res)=>{
    const editUser=new user(req.body);
    const userdata= req.body;
    var id = mongoose.Types.ObjectId(userdata._id);
    // console.log(userdata._id)
    // console.log(userdata)
    // console.log(userdata)
    try {
        const result=editUser.remove({"_id":id})
        const resul=editUser.save()

        // const result=editUser.replaceOne({"_id":id},{$set:userdata},(err,result)=>{
        //     if(err){
        //         console.log(err)
        //         res.send(err)
        //     }else{
        //         console.log(result)
        //         res.send(result)

        //     }

        // })
        // console.log(result)
    } catch (error) {
        // console.log(error)
    }
})

module.exports = router;