const express = require('express')
const router = express.Router()
const Place = require('../models/place.model')


//crud for place
router.get("", async (req, res) => {
    const category = await Place.find().lean().exec();
    return res.status(201).send(category)
})
router.get("/:id", async (req, res) => {
    const category = await Place.findById(req.params.id).lean().exec();
    return res.status(201).send(category)
})
router.post("", async (req, res) => {
    const category = await Place.create(req.body);
    return res.status(201).send(category)
})
router.patch("/:id", async (req, res) => {
    const category = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    return res.status(201).send(category)
})
router.delete("/:id", async (req, res) => {
    const category = await Place.findByIdAndDelete().lean().exec();
    return res.status(201).send(category)
})

module.exports = router;