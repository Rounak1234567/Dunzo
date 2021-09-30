const { application } = require('express');
const express = require('express');
const bodyParser = require("body-parser")
const ejs = require("ejs");
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:true}));
const connect = () => {
    console.log("Connected to the database")
    return mongoose.connect("mongodb+srv://kamleshdb:DunzoDBS@cluster0.b1ocg.mongodb.net/DunzoDB?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })
    // return mongoose.connect("mongodb://127.0.0.1:27017/Dunzodb")
}

// Shop schema
const shopSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type:mongoose.Schema.Types.ObjectId,ref:"location",required:true },
    place: { type:mongoose.Schema.Types.ObjectId,ref:"place",required:true},
    product:[{type:mongoose.Schema.Types.ObjectId,ref:"product",required:true}],
})
const Shop = mongoose.model("shop", shopSchema);

//product schema
const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
    category:{type:mongoose.Schema.Types.ObjectId,ref:"categorie",required:true},
    subCategory:{type:mongoose.Schema.Types.ObjectId,ref:"subCategory",required:true},
    image:{type:String,required:true},
    quantity:{type:String,required:true},
    price:{type:Number,required:true},
    vegan:{type:mongoose.Schema.Types.ObjectId,ref:"vegan"}
})
const Product = mongoose.model("product", productSchema)

//category schema
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
})
const Category = mongoose.model("categorie", categorySchema);

// subCategory Schema:
const subCategorySchema = new mongoose.Schema({
    name:{type:String,required:true}
})
const SubCategory = new mongoose.model("subCategory",subCategorySchema)


//vegan Schema
const veganSchema = new mongoose.Schema({
    name:{type:String,required:true}
})
const Vegan = new mongoose.model("vegan",veganSchema);

// location Schema
const locationSchema = new mongoose.Schema({
    name:{type:String,required:true}
});
const Location = new mongoose.model("location",locationSchema)

//place Schema
const Place = new mongoose.model('place',locationSchema);






//------------------------------------------crud for shops----------------------------------------//
app.get("/shops", async (req, res) => {
    var shop = []
    const shops = await Shop.find().populate("location").populate("place").populate("product").lean().exec();
   for(var i=0;i<shops.length;i++){
       shop.push(shops[i].name)
   }
   res.send(shops)
})

app.get("/shops/location/:location",async(req,res)=>{
    var data = await Location.find({name:{$eq:req.params.location}});
    var shop = await Shop.find({location:{$eq:data[0]._id}});
    res.send(shop)
})
app.get("/shops/location/place/:location/:place", async(req,res)=>{
    var location = await Location.find({name:{$eq:req.params.location}});
    var place = await Place.find({name:{$eq:req.params.place}})
    let data = await Shop.find({$and:[{location:{$eq:location[0]._id}},{place:{$eq:place[0]._id}}]});
    res.send(data)
})
app.post("/shops", async (req, res) => {
    const shops = await Shop.create(req.body);
    return res.status(201).send(shops)
})
app.get("/shops/:id",async(req,res)=>{
    const data = await Shop.findById(req.params.id).populate("location").populate("place").populate("product");
    res.render("list",{data:data})
})
app.patch("/shops/:id", async (req, res) => {
    const shops = await Shop.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.status(201).send(shops)
})
app.delete("/shops/:id", async (req, res) => {
    const shops = await Shop.findByIdAndDelete(req.params.id);
    return res.status(201).send(shops)
})


//crud for category
app.get("/categories", async (req, res) => {
    const category = await Category.find().lean().exec();
    return res.status(201).send(category)
})
app.post("/categories", async (req, res) => {
    const category = await Category.create(req.body);
    return res.status(201).send(category)
})
app.patch("/categories/:id", async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    return res.status(201).send(category)
})
app.delete("/categories/:id", async (req, res) => {
    const category = await Category.findByIdAndDelete().lean().exec();
    return res.status(201).send(category)
})


//crud for products
app.get("/products", async (req, res) => {
    const products = await Product.find().lean().exec();
    return res.status(201).send(products)
})
app.post("/products", async (req, res) => {
    const products = await Product.create(req.body);
    return res.status(201).send(products)
})
app.patch("/products/:id", async (req, res) => {
    const products = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.status(201).send(products)
})
app.delete("/products/:id", async (req, res) => {
    const products = await Product.findByIdAndDelete(req.params.id);
    return res.status(201).send(products)
})


//crud for subCategory
app.get("/subcategory", async (req, res) => {
    const category = await SubCategory.find().lean().exec();
    return res.status(201).send(category)
})
app.post("/subcategory", async (req, res) => {
    const category = await SubCategory.create(req.body);
    return res.status(201).send(category)
})
app.patch("/subcategory/:id", async (req, res) => {
    const category = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    return res.status(201).send(category)
})
app.delete("/subcategory/:id", async (req, res) => {
    const category = await SubCategory.findByIdAndDelete().lean().exec();
    return res.status(201).send(category)
})

//crud for vegan
app.get("/vegan", async (req, res) => {
    const category = await Vegan.find().lean().exec();
    return res.status(201).send(category)
})
app.post("/vegan", async (req, res) => {
    const category = await Vegan.create(req.body);
    return res.status(201).send(category)
})
app.patch("/vegan/:id", async (req, res) => {
    const category = await Vegan.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    return res.status(201).send(category)
})
app.delete("/vegan/:id", async (req, res) => {
    const category = await Vegan.findByIdAndDelete().lean().exec();
    return res.status(201).send(category)
})
//crud for location
app.get("/location", async (req, res) => {
    const category = await Location.find().lean().exec();
    return res.status(201).send(category)
})
app.post("/location", async (req, res) => {
    const category = await Location.create(req.body);
    return res.status(201).send(category)
})
app.patch("/location/:id", async (req, res) => {
    const category = await Location.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    return res.status(201).send(category)
})
app.delete("/location/:id", async (req, res) => {
    const category = await Location.findByIdAndDelete().lean().exec();
    return res.status(201).send(category)
})

//crud for place
app.get("/place", async (req, res) => {
    const category = await Place.find().lean().exec();
    return res.status(201).send(category)
})
app.post("/place", async (req, res) => {
    const category = await Place.create(req.body);
    return res.status(201).send(category)
})
app.patch("/place/:id", async (req, res) => {
    const category = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    return res.status(201).send(category)
})
app.delete("/place/:id", async (req, res) => {
    const category = await Place.findByIdAndDelete().lean().exec();
    return res.status(201).send(category)
})
app.listen(5000,(req,res)=>{
    connect()
    console.log("Server started on port 5000")
})