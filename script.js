console.log("Rock, Paper, JavaScript!");


// returns either rock, paper, or scissors randomly
function getComputerChoice() {

    // randomly selects 0, 1, or 2
    let selection = Math.floor(Math.random() * 3);


    if (selection == 0) {
        return "ROCK";

    } else if (selection == 1) {
        return "PAPER";

    } else {
        return "JAVASCRIPT";
    }
}

// prompt player for their selection
function getPlayerChoice() {
    let selection = prompt("Enter rock, paper, or javascript");

    return selection.toUpperCase();
}

function playRound() {

    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    console.log("You chose: " + playerChoice);
    console.log("Computer chose: " + computerChoice);

    // check for tie 
    if (playerChoice == computerChoice) {
        return "It's a tie!";

        // check for winning conditions
    } else if (playerChoice == "ROCK" && computerChoice == "JAVASCRIPT") {
        return displayWinningText(playerChoice, computerChoice);

    } else if (playerChoice == "JAVASCRIPT" && computerChoice == "PAPER") {
        return displayWinningText(playerChoice, computerChoice);

    } else if (playerChoice == "PAPER" && computerChoice == "ROCK") {
        return displayWinningText(playerChoice, computerChoice);

        // losing condition
    } else {

        return displayLosingText(playerChoice, computerChoice);
    }



}

function displayWinningText(playerChoice, computerChoice) {
    return "You win! " + playerChoice + " beats " + computerChoice;
}

function displayLosingText(playerChoice, computerChoice) {
    return "You lose! " + computerChoice + " beats " + playerChoice;
}