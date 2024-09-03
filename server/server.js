//imports
const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();


const recipieRoutesAya = require("./routes/recipieRoutesAya");
const dishRoutesAya = require("./routes/dishRoutesAya");



const userRoutes = require("./routes/userRoutes"); 


const mongoose = require("./config/dbConfig");
const chefRoutes = require("./routes/chefRoutes");


// Paypal integration 
const paypal = require("paypal-rest-sdk");

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'NFZ8HHT9XSZDN',
  'client_secret': ';>R-8-r:'
});


//server variables
const port = process.env.PORT || 3000;
const app = express();

//server middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());



// Use the recipie routes
app.use("/api", recipieRoutesAya);

// Use the dish routes
app.use("/api", dishRoutesAya);



//API Routes:
//Users Routes
app.use("/api/users", userRoutes); 
app.use("/api/chefs", chefRoutes);
//Other Routes
app.use("/api/dishes", dishRoutes); 


//server connection
app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
