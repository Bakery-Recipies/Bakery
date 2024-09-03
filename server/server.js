//imports
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const mongoose = require("./config/dbConfig");
const recipieRoutesAya = require("./routes/recipieRoutesAya");
const dishRoutesAya = require("./routes/dishRoutesAya");

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

// Use the recipie routes
app.use("/api", recipieRoutesAya);

// Use the dish routes
app.use("/api", dishRoutesAya);

//server connection
app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
