//  admin
const express = require("express")
const mongoose = require("mongoose")
const app = express();
const cors = require('cors')
const bookRouter = require("./Routes/book-routes")

app.use(cors());
app.use(express.json())
app.use("/books",bookRouter);  // http://localhost:5000/books

mongoose.connect(
    "mongodb+srv://pavan:pavan@cluster0.jahabhw.mongodb.net/BookStore?retryWrites=true&w=majority"
).then(()=> console.log("Connected to the Database"))
.catch((err)=>{
    console.log(err)
});

app.listen(5000, ()=>console.log("server is running in 5000 port"))

