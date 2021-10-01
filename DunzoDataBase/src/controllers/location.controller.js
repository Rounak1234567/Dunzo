const express = require('express')
const router = express.Router()
const Location = require('../models/location.model')

//crud for location
router.get("", async (req, res) => {
    const category = await Location.find().lean().exec();
    return res.status(201).send(category)
})
router.get("/:id", async (req, res) => {
    const category = await Location.findById(req.params.id).lean().exec();
    return res.status(201).send(category)
})
router.post("", async (req, res) => {
    const category = await Location.create(req.body);
    return res.status(201).send(category)
})
router.patch("/:id", async (req, res) => {
    const category = await Location.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    return res.status(201).send(category)
})
router.delete("/:id", async (req, res) => {
    const category = await Location.findByIdAndDelete().lean().exec();
    return res.status(201).send(category)
})

module.exports = router;