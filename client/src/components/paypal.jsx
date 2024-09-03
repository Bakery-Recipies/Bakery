import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Paying() {
  return (
    <PayPalScriptProvider options={{ "client-id": "NFZ8HHT9XSZDN" }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "1.00",
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
          });
        }}
      />
    </PayPalScriptProvider>
  );
}
export default Paying;