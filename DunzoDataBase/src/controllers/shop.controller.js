const express = require('express')
const router = express.Router();

const Shop = require("../models/shop.model")
const Product = require("../models/product.model")
const Location = require("../models/location.model")
const Place = require("../models/place.model")

//------------------------------------------crud for shops----------------------------------------//
router.get("", async (req, res) => {
    const shops = await Shop.find().populate("location").populate("place").populate("product").lean().exec();
    return res.send(shops);
})

router.get("/location/:location",async(req,res)=>{
var data = await Location.find({name:{$eq:req.params.location}});
var shop = await Shop.find({location:{$eq:data[0]._id}});
res.send(shop)
})
router.get("/location/place/:location/:place", async(req,res)=>{
    var location = await Location.find({name:{$eq:req.params.location}});
    var place = await Place.find({name:{$eq:req.params.place}})
    let data = await Shop.find({$and:[{location:{$eq:location[0]._id}},{place:{$eq:place[0]._id}}]});
    res.send(data)
})
router.post("", async (req, res) => {
    const shops = await Shop.create(req.body);
    return res.status(201).send(shops)
})
router.get("/:id",async(req,res)=>{
    const data = await Shop.findById(req.params.id).populate("location").populate("place").populate("product");
    res.render("list",{data:data})
})
router.patch("/:id", async (req, res) => {
    const shops = await Shop.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.status(201).send(shops)
})
router.delete("/:id", async (req, res) => {
    const shops = await Shop.findByIdAndDelete(req.params.id);
    return res.status(201).send(shops)
})

module.exports = router;