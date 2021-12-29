const mongoose = require('mongoose')

// location Schema
const locationSchema = new mongoose.Schema({
    name:{type:String,required:true}
});
const Location = new mongoose.model("location",locationSchema)

module.exports = Location;