const express = require("express")
const mongoose = require("mongoose")
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js')
const app = express()


// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use("/api/products", productRoute);


app.get('/', (req, res)=> {
    res.send("Hello from NODEMON API")
});

mongoose.connect("mongodb+srv://rbalamcm:hBTpurrlU3nUbJxP@cluster0.wrjvxef.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
      console.log('Connected!');
      app.listen(3000, (()=> {

        console.log("Server is running on port 3000");

      }))
    
    }).catch(() => {

        console.log("Connection failed!!");
    
    });