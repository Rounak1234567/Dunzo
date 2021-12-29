const mongoose = require("mongoose");
module.exports = () => {
    return mongoose.connect("mongodb+srv://kamleshdb:DunzoDBS@cluster0.b1ocg.mongodb.net/DunzoDB?retryWrites=true&w=majority")
     //,{useNewUrlParser:true,useUnifiedTopology:true}
 }
 