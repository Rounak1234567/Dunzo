const mongoose = require('mongoose')

//place Schema
// location Schema
const locationSchema = new mongoose.Schema({
    name:{type:String,required:true}
});
const Place = new mongoose.model('place',locationSchema);

module.exports = Place