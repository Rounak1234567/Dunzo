const express = require('express');
const app = express();
//const mongoose = require('mongoose');
app.use(express.json());
app.set("view engine","ejs")
app.use(express.static(__dirname + "/public"))
const bodyParser = require("body-parser")
const ejs = require("ejs");
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));


const connect = require("./configs/db_connection")

const shopController = require('./controllers/shop.controller')
const productController = require("./controllers/product.controller")
const categoryController = require('./controllers/category.controller')
const subcategoryController = require("./controllers/subcategory.controller")
const locationController = require("./controllers/location.controller")
const veganController = require("./controllers/vegan.controller")
const placeController = require("./controllers/place.controller")

app.get("/",(req,res)=>{
    res.render("home2")
})
app.use("/shops",shopController)
app.use("/products",productController)
app.use("/categories",categoryController)
app.use("/subcategory",subcategoryController)
app.use("/vegan",veganController)
app.use("/location",locationController)
app.use("/place",placeController)


app.use("/payment_last_page",(req,res)=>{
    res.render("payment_last_page")
})

app.listen(5000,async()=>{
    await connect();
    console.log("connected to Atlas")
    console.log("Server started on port 5000")
})