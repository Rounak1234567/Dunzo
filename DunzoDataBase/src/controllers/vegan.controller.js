const express = require('express');
const router = express.Router();

const Vegan = require('../models/vegan.model')
//crud for vegan
router.get("", async (req, res) => {
    const category = await Vegan.find().lean().exec();
    return res.status(201).send(category)
})
router.get("/:id", async (req, res) => {
    const category = await Vegan.findById(req.params.id).lean().exec();
    return res.status(201).send(category)
})
router.post("", async (req, res) => {
    const category = await Vegan.create(req.body);
    return res.status(201).send(category)
})
router.patch("/:id", async (req, res) => {
    const category = await Vegan.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    return res.status(201).send(category)
})
router.delete("/:id", async (req, res) => {
    const category = await Vegan.findByIdAndDelete().lean().exec();
    return res.status(201).send(category)
})

module.exports = router;