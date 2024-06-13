import inquirer from "inquirer";
const computerGeneratedNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Guess any number between 1 to 10",
    },
]);
if (answer.userGuessedNumber === computerGeneratedNumber) {
    console.log("Congratualations!!!! You win");
}
else {
    console.log("You loss....Better Luck Next Time! ");
}
