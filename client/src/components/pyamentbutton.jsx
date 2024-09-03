import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PayPalButton({ amount }) {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      // Send the payment details to your server
      fetch('/api/complete-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderID: data.orderID,
          payerID: data.payerID,
          paymentID: details.id,
        }),
      });
    });
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "AaNKdFSya2nFjcnY-ovYES--3uDl6E6fS9Fz4SpNsX0iAvMg_m0PIoQT2SJsw_NUXN4QAikbdDXJqRZE" }}>
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </PayPalScriptProvider>
  );
}

export default PayPalButton;