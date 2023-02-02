import fetch from "node-fetch";
import { phoneNumber } from "./data/contact.js";
import FLUTTERWAVE_API_KEY from "./env.js";

let promiseArray = [];
for (const key in phoneNumber) {
    const amount = 100;
    const randomReferenceID = Math.floor(Math.random() * 1000000000000);

    var data = JSON.stringify({
        country: "NG",
        customer: phoneNumber[key],
        amount: amount,
        recurrence: "ONCE",
        type: "AIRTIME",
        reference: randomReferenceID,
    });

    let request = fetch("https://api.flutterwave.com/v3/bills", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${FLUTTERWAVE_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: data,
    });

    promiseArray.push(request);
}

Promise.all(promiseArray).then((values) => {
    let jsonPromise = values.map((i) => i.json());
    Promise.all(jsonPromise).then((jsonPromise) => {
        console.log(jsonPromise);
    });
});
