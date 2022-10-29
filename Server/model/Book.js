const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    name:{type:String, required: true},
    author:{type:String, required: true},
    description:{type:String, required: true},
    price:{type:String, required: true},
    avaliable:{type:Boolean},
    image:{type:String, required: true}
})

module.exports = mongoose.model("Book",BookSchema);