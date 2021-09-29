const { application } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/Dunzodb")
}


const shopSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    city: { type: String, required: true }
})

const Shops = mongoose.model("shops", shopSchema);

// const sub_typeSchema = new mongoose.Schema({
//     sub_type:{type:String,required:true}
// });
// const Sub_types = mongoose.model("subtypes",sub_typeSchema);

const categorySchema = new mongoose.Schema({
    type: { type: String, required: true },
    //sub_types: [{ type: mongoose.Schema.Types.ObjectId, ref: "subtypes", }]
})
const Category = mongoose.model("categories", categorySchema);

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "categories", required: true },
    shop: [{ type: mongoose.Schema.Types.ObjectId, ref: "shops", required: true }]
})
const Products = mongoose.model("products", productSchema)


//crud for shops
app.get("/shops", async (req, res) => {
    const shops = await Shops.find().lean().exec();
    return res.status(201).send(shops)
})
app.post("/shops", async (req, res) => {
    const shops = await Shops.create(req.body);
    return res.status(201).send(shops)
})
app.patch("/shops/:id", async (req, res) => {
    const shops = await Shops.findByIdAndUpdate(req.params.body, req.body, { new: true })
    return res.status(201).send(shops)
})
app.delete("/shops/:id", async (req, res) => {
    const shops = await Shops.findByIdAndDelete(req.params.id);
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
    const products = await Products.find().lean().exec();
    return res.status(201).send(products)
})
app.post("/products", async (req, res) => {
    const products = await Products.create(req.body);
    return res.status(201).send(products)
})
app.patch("/products/:id", async (req, res) => {
    const products = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.status(201).send(products)
})
app.delete("/products/:id", async (req, res) => {
    const products = await Products.findByIdAndDelete(req.params.id);
    return res.status(201).send(products)
})


app.listen(5000, async () => {
    await connect();
    console.log("listening to port 5000");
})