//imports
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const mongoose=require("./config/dbConfig")
const userRoutes = require("./routes/userRoutes"); // Ensure correct path
const dishRoutes = require("./routes/dishRoutes"); // Add this line
//server variables
const port = process.env.PORT || 3000;
const app = express();
const corsConfig = {
  origin: "https://localhost:5173",
  credentials: true,
};
//server middlewares
app.use(cors(corsConfig));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api", userRoutes); // Use routes
app.use("/api/dishes", dishRoutes); // Add this line

//server connection
app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
