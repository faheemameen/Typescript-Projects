#! /1usr/bin/env node
import inquirer from "inquirer";
import { faker } from '@faker-js/faker';

//requirement
//1)user  2)atm machine 3)atm function

interface User{
    id:number,
    pin:number,
    name:string,
    accountNumber:number,
    balance:number
}

const createUser = ()=>{
    let users:User[] = [];

    for(let i = 0; i < 5; i++){

        let user:User={
            id:i,
            pin:1000 + i,
            name:faker.person.fullName(),
            accountNumber:Math.floor(1000000 * Math.random() * 9000000),
            balance:100000 * i
        }

        users.push(user);
    }
   return users;
}

const atmMachine = async(users:User[])=>{
    const res = await inquirer.prompt({
        type:"number",
        message:"please enter pin code",
        name:"pin"

    })
    const user = users.find(val => val.pin == res.pin);
    if(user){
        console.log(`Welcome ${user.name}`);
        atmFunction(user);
        return
    }
    console.log("Invalid pin code");
}

const atmFunction = async(user:User)=>{
    let ans  = await inquirer.prompt({
         type:"list",
         name:"select",
         message:"What you want to do",
         choices:["Withdraw","balance","deposit","exit"]
    })
    if(ans.select == "Withdraw"){
        const amount = await inquirer.prompt({
            type:"number",
            message:"Enter amount",
            name:"rupee"
        })
        if(amount.rupee > user.balance){
           return  console.log("Insuficient Balance");
    }
    if(amount.rupee > 25000){
       return  console.log("withdraw limit is 25000");
    }
    console.log(`withdraw amount: ${amount.rupee}`);
    console.log(`Remaining Balnace: ${user.balance-amount.rupee}`);

    }
    if(ans.select == "balance"){
        console.log(`Balance: ${user.balance}`);
    }
    if(ans.select == "deposit"){
         const deposit = await inquirer.prompt({
            type:"number",
            message:"Enter Deposit amount",
            name:"rupee"
         })
         console.log(`Deposit Amount: ${deposit.rupee}`);
         console.log(`Total Amount: ${user.balance + deposit.rupee}`);
    }
    if(ans.select == "exit"){
        console.log("Thank for using atm")
    }

}


const users = createUser();
atmMachine(users);
// console.log(users);