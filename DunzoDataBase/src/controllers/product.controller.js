const express = require('express');
const router = express.Router();

const Product = require("../models/product.model")
const Category = require("../models/category.model")
const SubCategory = require("../models/subcategory.model")
const Vegan = require("../models/vegan.model")
//crud for products
router.get("", async (req, res) => {
    const products = await Product.find().lean().exec();
    return res.status(201).send(products)
})
router.post("", async (req, res) => {
    const products = await Product.create(req.body);
    return res.status(201).send(products)
})
router.patch("/:id", async (req, res) => {
    const products = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.status(201).send(products)
})
router.delete("/:id", async (req, res) => {
    const products = await Product.findByIdAndDelete(req.params.id);
    return res.status(201).send(products)
})

module.exports = router;