
// Game and UI secion
let playerscore = 0;
let computerscore = 0;
let rounds = 0;
let gameIsActive = true;

const mistletoe = document.querySelector(".mistletoe-picture1");
const candycane = document.querySelector(".candy-cane-picture1");
const christmaspudding = document.querySelector(".christmas-pudding-picture1");
const playerscore_results = document.querySelector(".player-score")
const computerscore_results = document.querySelector(".computer-score")
const result = document.querySelector(".result-section")
const rounds_result = document.querySelector(".Rounds")

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}


function win(user, comp) {
    playerscore++;
    playerscore_results.textContent = "Player score: " + playerscore;
    computerscore_results.textContent = "Computer score: " + computerscore;
    result.textContent = user + " beats " + comp + ". You win!"

}

function lose(user, comp) {
    computerscore++;
    playerscore_results.textContent = "Player score: " + playerscore;
    computerscore_results.textContent = "Computer score: " + computerscore;
    result.textContent = user + " loses to " + comp + ". You lose!"
    
}

function tie(user, comp) {
    result.textContent = "You both picked " + user +". It's a draw!"
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

function game1(playerchoice) {
    const computer = getComputerChoice();
    if (gameIsActive) {
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
            
        } rounds++;
        rounds_result.textContent = "Round: " + rounds
    }

    if (playerscore === 5 || computerscore === 5) {
        gameIsActive = false;
        console.log("Game Over")

        if (playerscore > computerscore) {
            console.log("You win the game! Congratulations!");
        } else if (playerscore < computerscore) {
            console.log("Computer wins the game!");
        } else {
            console.log("It's a tie!");
        }

        console.log("Game over! Final scores are... You:" + " " + playerscore + " " + "Computer:" + " " + computerscore)
    }
    
    
}








    
   






