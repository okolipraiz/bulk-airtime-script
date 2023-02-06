# bulk-airtime-script

This repository contains a javascript script based file, used to gift or share airtime/data to different phone numbers easily using flutterwave api and secret keys, without the stress of doing it manually.

## Getting Started

This guide assumed you have NodeJS 16+ installed on your pc.

## Clone this repository

git clone https://github.com/okolipraiz/bulk-airtime-script

## Set up environment variables

Use the content of env.example.js to create a env.js file, where your secret key would be stored. We can't use the main .env file, because this a vanilla javascript file, and some node requirement for calling a node package wouldn't work.

## Install all dependencies

``` 
# using npm
npm install

# using yarn
yarn install

```
Open your terminal, while using vscode press ``` ctrl + j ``` . The cd into the index.js file then run ``` node index ```.

You can start editing the page by modifying index.js. Then inside the data folder, you can create an array of numbers which would be used in the index file to share the airtime to the different number, example below.

``` 
export const phoneNumber = [
    "09013606***",
    "090745***4*",
    "0****054481",
];
```

Learn More
To learn more about how to use flutterwave api, take a look at the following resources:

[FlutterWave Documentation](https://developer.flutterwave.com/reference/endpoints/bills/#create-a-bill-payment)  - learn about Flutter wave features and API.