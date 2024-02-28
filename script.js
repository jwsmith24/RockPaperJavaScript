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
        return true;

    } else if (playerChoice == "JAVASCRIPT" && computerChoice == "PAPER") {
        return true;

    } else if (playerChoice == "PAPER" && computerChoice == "ROCK") {
        return true;

        // losing condition
    } else {

        return false;
    }

}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;


    while (round <= 5) {

        let playerWonRound = playRound();

        if (playerWonRound) {
            ++playerScore;
            console.log("You win the round!");
            displayScoreBoard(playerScore, computerScore);

        } else {
            ++computerScore;
            console.log("You lose the round!");
            displayScoreBoard(playerScore, computerScore);

        }

        round++;

    }

    if (playerScore > computerScore) {
        return "You win the game!";
    } else {
        return "You lost.. try again!";
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
    alert("you chose rock!");
});

paperButton.addEventListener('click', () => {
    alert("you chose paper!");
});

javascriptButton.addEventListener('click', () => {
    alert("you chose javascript!");
});