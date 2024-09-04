// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const dishRoutes = require("./routes/dishRoutes");
const recipiesRoutes = require("./routes/recipieRoutes");
const userRoutes = require("./routes/userRoutes");
const chefRoutes = require("./routes/chefRoutes");

const mongoose = require("./config/dbConfig");
const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "NFZ8HHT9XSZDN",
  client_secret: ";>R-8-r:",
});

const port = process.env.PORT || 3000;
const app = express();
const corsConfig = {
  credentials: true,
};

app.use(cors(corsConfig));
app.use(bodyParser.json());
app.use(cookieParser());

// Define API Routes
app.use("/api/users", userRoutes);
app.use("/api/chefs", chefRoutes);
app.use("/api/dishes", dishRoutes);
app.use("/api/recipes", recipiesRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
