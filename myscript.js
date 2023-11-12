
// Game secion
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

// UI

const mistletoe = document.querySelector(".mistletoe-picture1");
const candycane = document.querySelector(".candy-cane-picture1");
const christmaspudding = document.querySelector(".christmas-pudding-picture1");
const playerscore_results = document.querySelector(".player-score")
const computerscore_results = document.querySelector(".computer-score")
const result = document.querySelector(".result-section")



function win(user, comp) {
    playerscore++;
    playerscore_results.textContent = playerscore;
    computerscore_results.textContent = computerscore;
    result.textContent = user + " beats " + comp + ". You win!"

}

function lose(user, comp) {
    computerscore++;
    playerscore_results.textContent = playerscore;
    computerscore_results.textContent = computerscore;
    result.textContent = user + " loses to " + comp + ". You lose!"
    
}

function tie(user, comp) {
    result.textContent = "You both picked " + user +". It's a draw!"
}

function game1(playerchoice) {
    const computer = getComputerChoice();
    //console.log("Computer chose " + computer);
    //console.log("player 1 chose " + playerChoice)
    switch (playerchoice + " " + computer) {
        case "rock scissors":
        case "paper rock":
        case "scissors paper":
            win(playerchoice, computer);
            break;
        case "rock paper":
        case "paper scissors":
        case "scissors rock":
            lose(playerchoice, computer);
            break;
        case "rock rock":
        case "paper paper":
        case "scissors scissors":
            tie(playerchoice, computer);
            break;
    }
}

function main() {
    mistletoe.addEventListener('click', function() {
        game1("paper")
    })
    candycane.addEventListener('click', function() {
        game1("scissors")
    })
    christmaspudding.addEventListener('click', function() {
        game1("rock")
    })

}
main();






