import inquirer from 'inquirer';
import chalk from "chalk";
//API link
let apiLink = "https://v6.exchangerate-api.com/v6/28bbdec73e1e2d610a59e49f/latest/PKR";
//fetching data from API
let fetchData = async (data) => {
    let fetchData = await fetch(data);
    let res = await fetchData.json();
    return res.conversion_rates;
};
let data = await fetchData(apiLink);
//converting object into array
let countries = Object.keys(data);
//user input for first country
let firstCountry = await inquirer.prompt({
    type: "list",
    message: "Converting from",
    choices: countries,
    name: "name"
});
console.log(`Converting from ${chalk.greenBright.bold(firstCountry.name)}`);
//user input for amount that wants to convert
let userMoney = await inquirer.prompt({
    type: "number",
    message: `Please enter amount in: ${chalk.greenBright.bold(firstCountry.name)}`,
    name: "rupee"
});
//user input for second country
let secondCountry = await inquirer.prompt({
    type: "list",
    message: "Converting to",
    choices: countries,
    name: "name"
});
//conversion rates
let cnv = `https://v6.exchangerate-api.com/v6/28bbdec73e1e2d610a59e49f/pair/${firstCountry.name}/${secondCountry.name}`;
// console.log(cnv); //
//fetching data for conversion rates
let cnvData = async (data) => {
    let cnvData = await fetch(data);
    let res = await cnvData.json();
    return res.conversion_rate;
};
let conversionRate = await cnvData(cnv);
let convertedRate = userMoney.rupee * conversionRate;
console.log(`your ${chalk.bold.greenBright(userMoney.rupee)} ${chalk.bold.greenBright(firstCountry.name)}  in ${chalk.bold.greenBright(secondCountry.name)} is ${chalk.bold.greenBright(convertedRate)}`);
