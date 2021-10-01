const express = require('express')
const router = express.Router();

const SubCategory = require('../models/subcategory.model')
//crud for subCategory
router.get("", async (req, res) => {
    const category = await SubCategory.find().lean().exec();
    return res.status(201).send(category)
})
router.post("", async (req, res) => {
    const category = await SubCategory.create(req.body);
    return res.status(201).send(category)
})
router.patch("/:id", async (req, res) => {
    const category = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    return res.status(201).send(category)
})
router.delete("/:id", async (req, res) => {
    const category = await SubCategory.findByIdAndDelete().lean().exec();
    return res.status(201).send(category)
})

module.exports = router