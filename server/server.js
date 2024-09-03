//imports
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const mongoose=require("./config/dbConfig")

// Paypal integration 
const paypal = require("paypal-rest-sdk");

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'NFZ8HHT9XSZDN',
  'client_secret': ';>R-8-r:'
});


app.post('/api/payment-success', async (req, res) => {
  try {
      const { orderID, payerID, paymentID, paymentSource, purchaseUnits } = req.body;

      // Verify the payment with PayPal
      const payment = await paypal.payment.get(paymentID);

      if (payment.state === 'approved') {
          // Payment is verified, save to your database
          const transaction = new Transaction({
              paypalPaymentId: paymentID,
              payerId: payerID,
              orderId: orderID,
              amount: purchaseUnits[0].amount.value,
              currency: purchaseUnits[0].amount.currency_code,
              status: 'completed',
              paymentSource: paymentSource.paypal.email_address // or any other relevant info
          });

          await transaction.save();

          
          

          res.json({ success: true, message: 'Payment processed successfully' });
      } else {
          throw new Error('Payment not approved');
      }
  } catch (error) {
      console.error('Error processing payment:', error);
      res.status(500).json({ success: false, message: 'Error processing payment' });
  }
});


app.get('/api/success', async (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const execute_payment_json = {
      "payer_id": payerId,
      "transactions": [{
          "amount": {
              "currency": "USD",
              "total": "1.00"
          }
      }]
  };

  try {
      const payment = await new Promise((resolve, reject) => {
          paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
              if (error) {
                  reject(error);
              } else {
                  resolve(payment);
              }
          });
      });

      // Save transaction to database
      const transaction = new Transaction({
          paypalPaymentId: payment.id,
          payerId: payment.payer.payer_info.payer_id,
          amount: payment.transactions[0].amount.total,
          currency: payment.transactions[0].amount.currency,
          status: payment.state
      });

      await transaction.save();

      res.json({ success: true, message: 'Payment successful and transaction saved to database' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'An error occurred processing the payment' });
  }
});



// paypal end 


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

//server connection
app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
