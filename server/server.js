//imports
const express = require("express");
const cors = require("cors");
const paypal = require("paypal-rest-sdk");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();


// const recipieRoutesAya = require("./routes/recipieRoutesAya");
// const dishRoutesAya = require("./routes/dishRoutesAya");



// const userRoutes = require("./routes/userRoutes"); 


const mongoose = require("./config/dbConfig");
// const chefRoutes = require("./routes/chefRoutes");





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
// app.use("/api/users", userRoutes); 
// app.use("/api/chefs", chefRoutes);
//Other Routes
// app.use("/api/dishes", dishRoutes); 


// Paypal integration 

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AaNKdFSya2nFjcnY-ovYES--3uDl6E6fS9Fz4SpNsX0iAvMg_m0PIoQT2SJsw_NUXN4QAikbdDXJqRZE',
  'client_secret': 'EFgZ0bb68kjSKRdw84l6CjB3rIQrx465L3ByYloHYIRAxtpTdCB5wX3V4TVz6vBqokg-qO5OGIYXYpNz'
});
const Transaction = mongoose.model('Transaction', {
  paypalOrderId: String,
  paypalPayerId: String,
  paypalPaymentId: String,
  amount: Number,
  status: String,
  createdAt: { type: Date, default: Date.now }
});

app.post('/api/complete-payment', express.json(), async (req, res) => {
  const { orderID } = req.body;

  try {
    // Fetch the order details from PayPal
    const order = await new Promise((resolve, reject) => {
      paypal.orders.get(orderID, (error, order) => {
        if (error) reject(error);
        else resolve(order);
      });
    });

    // Ensure the order is in the correct state
    if (order.status !== 'COMPLETED') {
      return res.status(400).json({ success: false, error: 'Order not completed' });
    }

    // Extract relevant information
    const amount = order.purchase_units[0].amount.value;
    const payerID = order.payer.payer_id;

    // Save the transaction to the database
    const transaction = new Transaction({
      paypalOrderId: orderID,
      paypalPayerId: payerID,
      amount: parseFloat(amount),
      status: order.status
    });
    await transaction.save();

    res.json({ success: true, transactionId: transaction._id });
  } catch (error) {
    console.error('Payment verification failed:', error);
    res.status(500).json({ success: false, error: 'Payment verification failed' });
  }
});





// paypal end 


//server connection
app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
