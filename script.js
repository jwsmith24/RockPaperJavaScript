console.log("Rock, Paper, JavaScript!");

const ROCK = "ROCK";
const PAPER = "PAPER";
const JAVASCRIPT = "JAVASCRIPT";

let playerScore = 0;
let computerScore = 0;

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
        ++playerScore;
        displayRoundWin();
        return true;

    } else if (playerChoice == JAVASCRIPT && computerChoice == PAPER) {
        ++playerScore;
        displayRoundWin();
        return true;

    } else if (playerChoice == PAPER && computerChoice == ROCK) {
        ++playerScore;
        displayRoundWin();
        return true;

        // losing condition
    } else {

        displayRoundLose();
        return false;
    }

}

function displayScoreBoard(playerScore, computerScore) {

    const playerScoreSpan = document.querySelector('#playerScore');
    const computerScoreSpan = document.querySelector('#computerScore');

    playerScoreSpan.textContent = "Player: " + playerScore;
    computerScoreSpan.textContent = "Computer: " + computerScore;

}


function displayRoundWin() {
    const resultSpan = document.querySelector('#results #roundResult');
    resultSpan.textContent = "You win this round!";
}

function displayRoundLose() {
    const resultSpan = document.querySelector('#results #roundResult');
    resultSpan.textContent = "The computer won!";
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