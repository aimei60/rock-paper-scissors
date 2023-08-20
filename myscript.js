let playerscore = 0;
let computerscore = 0;
let rounds = 0;
let totalrounds = 5;

function getComputerChoice(computerchoice) {
    computerchoice = ['rock', 'paper','scissors'];
    return computerchoice[Math.floor(Math.random()*computerchoice.length)];
}

function playRound(playerselection, computerselection){
        console.log(playerselection, computerselection);
    
if (playerselection === computerselection){
    return "It's a tie! You both picked " + playerselection;
    }
else if (playerselection === 'rock' && computerselection === 'scissors'){
    playerscore++;
    return "You win! " + playerselection + " " + "beat " + computerselection;
    }
else if (playerselection === 'paper' && computerselection === 'rock'){
    playerscore++;
    return "You win! " + playerselection + " " + "beat " + computerselection;
    }
else if (playerselection === 'scissors' && computerselection === 'paper'){
    playerscore++;
    return "You win! " + playerselection + " " + "beat " + computerselection;
    }

else {
    computerscore++;
    return "You Lose! " + computerselection + " " + "beat " + playerselection;
    }
    
    rounds++

}

function game() {
    while (rounds > totalrounds) {
        const playerselection = prompt("Choose your weapon").toLowerCase();
        if (playerselection === 'rock' || playerselection === 'paper' || playerselection === 'scissors') {
            let computer = getComputerChoice();
            console.log('Computer chose ' + computer);
            playRound(playerselection, computer);
        } else {
            console.log('Invalid response. Please choose rock, paper or scissors.')
        }
    }
}

console.log("Game Over! Final scores are... You: " + playerscore + " " + "Computer: " + " " + computerscore);
if (playerscore > computerscore) {
    console.log("You win the Game! Congratulations!");
} else if (computerscore > playerscore) {
    console.log("Computer wins the Game! Sorry!")
} else {
    console.log("It's a tie!")
}






