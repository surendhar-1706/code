// App.js
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import toast, { Toaster } from "react-hot-toast";
import React, { useEffect } from "react";

function PayButton() {
  console.log("printing payment variable");
  console.log(process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID);
  const notify = () => toast("Here is your toast.");
  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
      }}
    >
      {/* <button onClick={notify}>Click me </button> */}
      <Toaster />
      <PayPalButtons
        style={{ layout: "horizontal" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "2.00",
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            toast.success(
              "Payment Completed.Thank You " + details.payer.name.given_name
            );
          });
        }}
        onCancel={() => {
          toast("Payment cancelled");
        }}
        onError={() => {
          toast("There was an error with your payment.Try again", {
            duration: 10000,
          });
        }}
      />
    </PayPalScriptProvider>
  );
}

export default PayButton;
