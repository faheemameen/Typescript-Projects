#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//generate a random number
const randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumber);
let remainingChances = 6;
function validateNumber(input) {
    const number = parseFloat(input);
    if (isNaN(number)) {
        return "Please enter a valid number";
    }
    if (number < 0 || number > 100) {
        return "Please guess a number between 1 to 100";
    }
    return true;
}
async function guessNumber() {
    inquirer.prompt([
        {
            type: "input",
            name: "guess",
            message: "Guess a number between 1 and 100",
            validate: validateNumber,
        }
    ])
        .then((answer) => {
        const guessedNumber = parseInt(answer.guess);
        if (guessedNumber === randomNumber) {
            console.log(chalk.bgBlue.yellow(`Congratulation!, You guessed the  number ${randomNumber} correctly`));
            process.exit(0);
        }
        else if (guessedNumber < randomNumber) {
            remainingChances--;
            console.log(chalk.bgCyanBright.black(`your guess is low, kindly guess again your remaining chances left ${remainingChances}:`));
            if (remainingChances == 0) {
                console.log(chalk.red.bgRed(`we are really sorry you have missed your all chances,correct answer is: ${randomNumber}`));
            }
            else {
                guessNumber();
            }
        }
        else if (guessedNumber > randomNumber) {
            remainingChances--;
            console.log(chalk.bgGreen.black(`too high, kindly guess again your remaining chances left ${remainingChances}`));
            if (remainingChances == 0) {
                console.log(chalk.red.bgRed(`we are really sorry you have missed your all chances,correct answer is: ${randomNumber}`));
            }
            else {
                guessNumber();
            }
        }
    });
}
guessNumber();
