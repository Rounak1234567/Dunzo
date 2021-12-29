const mongoose = require('mongoose')

// Shop schema
const shopSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type:mongoose.Schema.Types.ObjectId,ref:"location",required:true },
    place: { type:mongoose.Schema.Types.ObjectId,ref:"place",required:true},
    product:[{type:mongoose.Schema.Types.ObjectId,ref:"product",required:true}],
})
const Shop = mongoose.model("shops", shopSchema);

module.exports = Shop;