const express = require("express");

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

router.get('/user/login',(req,res)=>{
    console.log()

    user.find({email:req.query.email})
    .then((data)=>{
        // console.log('Data:'+data);
    res.json(data);

    }).catch((error)=>{
        // console.log('Error:'+error)
    })
})

router.post('/user/new',(req,res)=>{
    const newUser=new user(req.body);
    newUser.save((error,result)=>{
        if(error){
            res.send(error)
            // return console.log(error)
        }
        res.send(result)
        // return console.log(result)

    })
   
})

// router.post('/user/new', data)
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


module.exports = router;