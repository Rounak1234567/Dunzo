const mongoose = require('mongoose')

//product schema
const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
    category:{type:mongoose.Schema.Types.ObjectId,ref:"categorie",required:true},
    subCategory:{type:mongoose.Schema.Types.ObjectId,ref:"subCategory",required:true},
    image:{type:String,required:true},
    quantity:{type:String,required:true},
    price:{type:Number,required:true},
    vegan:{type:mongoose.Schema.Types.ObjectId,ref:"vegan"}
})
const Product = mongoose.model("product", productSchema)

module.exports = Product;