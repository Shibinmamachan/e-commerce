import React from "react";
import { useLocation } from "react-router-dom";
import GooglePayButton from "@google-pay/button-react";

function Payment() {
  const location = useLocation();
  const { item } = location.state || {}; // or cart if you send multiple items

  // Calculate total amount dynamically if needed
  const totalPrice = item ? item.price : 0;

  return (
    <div className="container mt-4">
      <h2>Payment Page</h2>
      {item ? (
        <div>
          <h4>Buying: {item.title}</h4>
          <img src={item.image} alt={item.title} width="200" />
          <p>{item.description}</p>
          <p><strong>Price:</strong> ${totalPrice}</p>

          {/* ✅ Google Pay Button */}
          <GooglePayButton
            environment="TEST" // change to 'PRODUCTION' when you go live
            paymentRequest={{
              apiVersion: 2,
              apiVersionMinor: 0,
              allowedPaymentMethods: [
                {
                  type: "CARD",
                  parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["VISA", "MASTERCARD"],
                  },
                  tokenizationSpecification: {
                    type: "PAYMENT_GATEWAY",
                    parameters: {
                      gateway: "example", // Replace with your payment gateway name
                      gatewayMerchantId: "exampleGatewayMerchantId",
                    },
                  },
                },
              ],
              merchantInfo: {
                merchantId: "12345678901234567890", // Optional for test
                merchantName: "Your Store Name",
              },
              transactionInfo: {
                totalPriceStatus: "FINAL",
                totalPriceLabel: "Total",
                totalPrice: totalPrice.toString(),
                currencyCode: "USD",
                countryCode: "US",
              },
            }}
            onLoadPaymentData={(paymentRequest) => {
              console.log("✅ SUCCESS", paymentRequest);
              alert("Payment Successful!");
            }}
          />
        </div>
      ) : (
        <p>No item selected for payment.</p>
      )}
    </div>
  );
}

export default Payment;
