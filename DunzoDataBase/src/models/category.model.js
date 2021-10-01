const mongoose = require('mongoose')

//category schema
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
})
const Category = mongoose.model("categorie", categorySchema);
module.exports = Category;