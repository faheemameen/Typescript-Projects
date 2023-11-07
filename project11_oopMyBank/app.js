import { faker } from "@faker-js/faker";
import inquirer from "inquirer";
import chalk from "chalk";
class Customer {
    fname;
    lname;
    age;
    gender;
    mobNumber;
    accNumber;
    constructor(fname, lname, age, gender, mobNumber, accNumber) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.gender = gender;
        this.mobNumber = mobNumber;
        this.accNumber = accNumber;
    }
}
class Bank {
    customer = [];
    account = [];
    addCustomer(obj) {
        this.customer.push(obj);
    }
    addAcoountnumber(obj) {
        this.account.push(obj);
    }
    transaction(accObj) {
        let updateAccount = this.account.filter((acc) => acc.accNumber !== accObj.accNumber);
        this.account = [...updateAccount, accObj];
    }
    ;
}
let myBank = new Bank();
//creating objects
for (let i = 0; i <= 3; i++) {
    let fname = faker.person.firstName('male');
    let lname = faker.person.lastName();
    let num = parseInt(faker.helpers.replaceSymbolWithNumber("3##########")); //converting string into number
    const cus = new Customer(fname, lname, 25 * i, "male", num, 1000 + i);
    myBank.addCustomer(cus);
    myBank.addAcoountnumber({ accNumber: cus.accNumber, balance: 1000 * i });
}
//Bank Functionality
async function bankService(bank) {
    do {
        let service = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Please select the servce",
            choices: ["View Balance", "Cash Withdraw", "Cash Deposit", "Exit"]
        });
        if (service.select == "View Balance") {
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter your account number"
            });
            let account = myBank.account.find((acc) => acc.accNumber == res.num);
            if (!account) {
                console.log(chalk.red.bold.italic("Invalid Account Number"));
            }
            if (account) {
                let name = myBank.customer.find((item) => item.accNumber == account?.accNumber);
                console.log(`Dear ${chalk.green.italic(name?.fname)} ${chalk.green.italic(name?.lname)} your Account Balance is ${chalk.bold.blueBright(`$${account.balance}`)}`);
            }
        }
        if (service.select == "Cash Withdraw") {
            let res = await inquirer.prompt({
                type: "input",
                message: "Please enter your account number",
                name: "num"
            });
            let account = myBank.account.find((acc) => acc.accNumber == res.num);
            if (!account) {
                console.log(chalk.red.bold.italic("Invalid Account Number"));
            }
            if (account) {
                let ans = await inquirer.prompt({
                    type: "number",
                    message: "Please Enter your amount",
                    name: "rupee"
                });
                if (ans.rupee > account.balance) {
                    console.log(chalk.red.bold("Insufficient Balance"));
                }
                let newBalance = account.balance - ans.rupee;
                myBank.transaction({ accNumber: account.accNumber, balance: newBalance });
            }
        }
        if (service.select == "Cash Deposit") {
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please enter your account number"
            });
            let account = myBank.account.find((acc) => acc.accNumber == res.num);
            if (!account) {
                console.log(chalk.red.bold.italic("Invalid AccountNumber"));
            }
            if (account) {
                let ans = await inquirer.prompt({
                    type: "number",
                    message: "Please enter your amount",
                    name: "rupee"
                });
                let updateBalance = account.balance + ans.rupee;
                myBank.transaction({ accNumber: account.accNumber, balance: updateBalance });
            }
        }
        if (service.select == "Exit") {
            return;
        }
    } while (true);
}
bankService(myBank);
