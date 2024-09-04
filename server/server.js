// Imports
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const paypal = require('@paypal/checkout-server-sdk');
const userRoutes = require("./routes/userRoutes");
const dishRoutes = require("./routes/dishRoutes");
const chefRoutes = require("./routes/chefRoutes");
const mongoose = require("./config/dbConfig"); // Initialize DB




// Server variables
const port = process.env.PORT || 3000;
const app = express();
const corsConfig = {
  credentials: true,
};

// Server middlewares
app.use(cors(corsConfig));
app.use(bodyParser.json());
app.use(cookieParser());

// API Routes
app.use("/api/users", userRoutes); // Users Routes
app.use("/api/chefs", chefRoutes); // Chefs Routes
app.use("/api/dishes", dishRoutes); // Dishes Routes
app.use("/api/recipes", recipiesRoutes);


// Server connection
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});




