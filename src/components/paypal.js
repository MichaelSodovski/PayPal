import React, { useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


function PayPal() {

    return (
        <PayPalScriptProvider options={
            {
                "client-id": "AWg9gEMgIGQfi4OraQkophGSTSD3daT1jbI5PdVY1RNFoh5jplht6iUwrhdh90GWfXupS7Jm1NfRQlwD", // shouldnt be here exposed like that.. 
                currency: "USD",
                intent: "capture"
            }}>

            <PayPalButtons
                style={{ lsyout: 'horizontal' }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                currency_code: "USD",
                                value: '1.00'
                            }
                        }]
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then(details => {
                        alert('Transaction completed by ' + details.payer.name.given_name);
                        // optionally you can call your server to save the transaction 
                    });
                }}
            />
        </PayPalScriptProvider>
    )
}

export default PayPal; 