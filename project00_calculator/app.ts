#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk";

//calculator operator
enum Operator {
    ADD = "Addition",
    SUBTRACT = "Subtraction",
    MULTIPLY = "Multiplication",
    DIVIDE = "Division"
}

const prompt = inquirer.createPromptModule();

function validateNumber(input:string):boolean |string {
    if(isNaN(parseFloat(input))){
        return "Please enter a valid number"
    }
    return true;
}

async function main(){

    const input = await  prompt([
        {
        type:"input",
        name:"num1",
        message:"Please enter your first number:",
        validate:validateNumber
    },
    {
        type:"list",
        name:"operators",
        message:"Select an operator:",
        choices:Object.values(Operator)
    },
    {
        type:"input",
        name:"num2",
        message:"Please enter your second number:",
        validate:validateNumber
    }
]);

         const num1 = parseFloat(input.num1);
         const num2 = parseFloat(input.num2);
         let result:number ;

         const selectedOperator = input.operators as Operator;

         if(selectedOperator == Operator.ADD){
            result = num1 + num2;
            console.log(chalk.green.bgCyanBright(`Result is ${result}`));

          }else if(selectedOperator == Operator.SUBTRACT){
             result = num1 - num2;
             console.log(chalk.blue.bgRedBright(`Result is ${result}`))

          }else if(selectedOperator == Operator.MULTIPLY){
             result = num1 * num2;
             console.log(chalk.yellow.bgYellowBright(`Result is ${result}`))

          }else if(selectedOperator == Operator.DIVIDE){
             result = num1 / num2;
             console.log(chalk.red.bgBlackBright(`Result is ${result}`))
         }
}


main();