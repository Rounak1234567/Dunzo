const mongoose = require('mongoose')

//vegan Schema
const veganSchema = new mongoose.Schema({
    name:{type:String,required:true}
})
const Vegan = new mongoose.model("vegan",veganSchema);

module.exports = Vegan