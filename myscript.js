let playerscore = 0;
let computerscore = 0;
let rounds = 0;
const totalRounds = 5;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerselection, computerselection) {
    if (playerselection === computerselection) {
        console.log("It's a tie! You both picked " + playerselection);
    } else if (
        (playerselection === 'rock' && computerselection === 'scissors') ||
        (playerselection === 'paper' && computerselection === 'rock') ||
        (playerselection === 'scissors' && computerselection === 'paper')
    ) {
        console.log("You win! " + playerselection + " " + "beats " + " " + computerselection);
        playerscore++;
    } else {
        console.log("Computer wins! " + computerselection + " " + "beats" + " " + playerselection);
        computerscore++;
    }
    rounds++;
}

function Game() {
    while (rounds < totalRounds) {
        const playerChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
        if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
            const computer = getComputerChoice();
            console.log("Computer chose " + computer);
            playRound(playerChoice, computer);
        } else {
            console.log("Invalid choice. Try Again. Please choose rock, paper, or scissors.");
        }
    }

    console.log("Game over! Final scores are... You:" + " " + playerscore + " " + "Computer:" + " " + computerscore);
    if (playerscore > computerscore) {
        console.log("You win the game! Congratulations!");
    } else if (playerscore < computerscore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie!");
    }
}

//Game();

