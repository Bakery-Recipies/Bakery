// // Imports
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
// require("dotenv").config();
// const userRoutes = require("./routes/userRoutes");
// const dishRoutes = require("./routes/dishRoutes");
// const chefRoutes = require("./routes/chefRoutes");
// const mongoose = require("./config/dbConfig"); // Initialize DB

// // Paypal integration 
// const paypal = require("paypal-rest-sdk");
// paypal.configure({
//   'mode': 'sandbox', // sandbox or live
//   'client_id': 'NFZ8HHT9XSZDN',
//   'client_secret': ';>R-8-r:'
// });

// // Server variables
// const port = process.env.PORT || 3000;
// const app = express();
// const corsConfig = {
//   credentials: true,
// };

// // Server middlewares
// app.use(cors(corsConfig));
// app.use(bodyParser.json());
// app.use(cookieParser());



// // Auth routes (Google authentication, login, register)

// // API Routes
// app.use("/api/users", userRoutes); // Users Routes
// app.use("/api/chefs", chefRoutes); // Chefs Routes
// app.use("/api/dishes", dishRoutes); // Dishes Routes

// // Server connection
// app.listen(port, () => {
//   console.log(`Server is running on port http://localhost:${port}`);
// });




const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const mongoose = require('mongoose');
const authRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

app.use(cookieParser());
app.use(express.json());
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
