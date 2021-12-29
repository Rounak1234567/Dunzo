const express = require('express')
const router = express.Router();

const Category = require("../models/category.model")
//crud for category
router.get("", async (req, res) => {
    const category = await Category.find().lean().exec();
    return res.status(201).send(category)
})
router.post("", async (req, res) => {
    const category = await Category.create(req.body);
    return res.status(201).send(category)
})
router.patch("/:id", async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    return res.status(201).send(category)
})
router.delete("/:id", async (req, res) => {
    const category = await Category.findByIdAndDelete().lean().exec();
    return res.status(201).send(category)
})

module.exports = router;
