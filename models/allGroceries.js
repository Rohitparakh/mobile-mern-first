const mongoose= require("mongoose");

//Schema
const Schema= mongoose.Schema;
const allGroceriesSchema=new Schema({
    id: Number,
    title: String,
    imgSrc: String,
    price:Number,
    mrp:Number,
    offer:Boolean
})

// Model
const allGroceries=mongoose.model('allGroceries',allGroceriesSchema)

module.exports = allGroceries;