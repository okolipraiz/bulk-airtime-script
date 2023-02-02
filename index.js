import axios from "axios";
import { phoneNumber } from "./data/contact.js";
import FLUTTERWAVE_API_KEY from "./env.js";

for (const key in phoneNumber) {
    const amount = 100;
    const randomReferenceID = Math.floor(Math.random() * 1000000000000);
    // console.log( phoneNumber[key], amount, randomReferenceID);

    var data = JSON.stringify({
        bulk_reference: "edf-12de5223d2f32",
        callback_url:
            "https://webhook.site/5f9a659a-11a2-4925-89cf-8a59ea6a019a",
        bulk_data: [
            {
                country: "NG",
                customer: phoneNumber[key],
                amount: amount,
                recurrence: "ONCE",
                type: "AIRTIME",
                reference: randomReferenceID,
            },
        ],
    });

    var config = {
        method: "post",
        url: "https://api.flutterwave.com/v3/bulk-bills",
         headers: {
             Authorization:
                 `Bearer ${FLUTTERWAVE_API_KEY}`,
             "Content-Type": "application/json",
         },
        data: data,
    };

    axios(config)
        .then(function (response) {
             console.log((response.data.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}


