import React from 'react';
import axios from 'axios';

function PaymentButton() {
  const handlePayment = async () => {
    try {
      const response = await axios.post('/pay');
      window.location.href = response.data;
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  return <button onClick={handlePayment}>Pay with PayPal</button>;
}

export default PaymentButton;