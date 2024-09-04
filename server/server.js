//imports
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();


// const recipieRoutesAya = require("./routes/recipieRoutesAya");
const dishRoutes = require("./routes/dishRoutes");

const recipiesRoutes = require("./routes/recipieRoutes")

const userRoutes = require("./routes/userRoutes"); 


const mongoose = require("./config/dbConfig");
const chefRoutes = require("./routes/chefRoutes");
const contactRoutes = require("./routes/contactRoutes")
const reportRoutes = require('./routes/reportRoutes');
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
const corsConfig = {
  credentials: true,
};
//server middlewares
app.use(cors(corsConfig));
app.use(bodyParser.json());
app.use(cookieParser());

//API Routes:
//Users Routes
app.use("/api/users", userRoutes); 
app.use("/api/chefs", chefRoutes);
app.use("/api/recipes", recipiesRoutes);
//Other Routes
app.use("/api/dishes", dishRoutes);
app.use("/api/messages", contactRoutes);
app.use('/api/reports', reportRoutes);


//server connection
app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
