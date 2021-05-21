const express = require("express");

const router = express.Router();

const allGroceries=require('../models/allGroceries')
const offerGroceries=require('../models/offerGroceries')
const categories=require('../models/categories')

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
    
    offerGroceries.find({})
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


router.get('/name',(req,res)=>{
    
    const data={
        username: 'Manav',
        age: 18
    }
    
    res.json(data);
})



module.exports = router;