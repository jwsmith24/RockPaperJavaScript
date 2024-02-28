console.log("Rock, Paper, JavaScript!");

const ROCK = "ROCK";
const PAPER = "PAPER";
const JAVASCRIPT = "JAVASCRIPT";

// returns either rock, paper, or scissors randomly
function getComputerChoice() {

    // randomly selects 0, 1, or 2
    let selection = Math.floor(Math.random() * 3);


    if (selection == 0) {
        return ROCK;

    } else if (selection == 1) {
        return PAPER;

    } else {
        return JAVASCRIPT;
    }
}

// prompt player for their selection
function getPlayerChoice() {
    let selection = prompt("Enter rock, paper, or javascript");

    return selection.toUpperCase();
}

function playRound(playerChoice) {


    const computerChoice = getComputerChoice();

    console.log("You chose: " + playerChoice);
    console.log("Computer chose: " + computerChoice);

    // check for tie 
    if (playerChoice == computerChoice) {
        return "It's a tie!";

        // check for winning conditions
    } else if (playerChoice == ROCK && computerChoice == JAVASCRIPT) {
        return true;

    } else if (playerChoice == JAVASCRIPT && computerChoice == PAPER) {
        return true;

    } else if (playerChoice == PAPER && computerChoice == ROCK) {
        return true;

        // losing condition
    } else {

        return false;
    }

}

function displayScoreBoard(playerScore, computerScore) {
    console.log("SCOREBOARD")
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const javascriptButton = document.querySelector('#javascript');


rockButton.addEventListener('click', () => {
    playRound(ROCK);
});

paperButton.addEventListener('click', () => {
    playRound(PAPER);
});

javascriptButton.addEventListener('click', () => {
    playRound(JAVASCRIPT);
});