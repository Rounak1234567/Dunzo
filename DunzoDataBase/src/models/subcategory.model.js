const mongoose = require('mongoose')

// subCategory Schema:
const subCategorySchema = new mongoose.Schema({
    name:{type:String,required:true}
})
const SubCategory = new mongoose.model("subCategory",subCategorySchema)

module.exports = SubCategory;