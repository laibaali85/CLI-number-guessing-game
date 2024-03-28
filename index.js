#! /usr/bin/env node
import inquirer from "inquirer";
// steps of making a project:-
//1) computer will generate a random number;
//2) user input for guessing number:
//3) computer user input with computer generaated number and show result: 
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: " please guess a number between 1-10",
    }]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulations! you guesses the right number");
}
else {
    console.log("you guess the wrong number");
}
;
