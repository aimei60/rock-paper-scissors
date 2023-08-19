let computerchoice = ['rock', 'paper','scissors'];
function getComputerChoice(computerchoice) {
    return computerchoice[Math.floor(Math.random()*computerchoice.length)];
}


function playRound(playerselection, computerselection) {
    console.log(playerselection, computerselection);
    if (playerselection === computerselection) {
        return "It's a tie!";
    }
    else if (playerselection === 'rock' && computerselection === 'scissors') {
        return "You win!";
    }
    else if (playerselection === 'paper' && computerselection === 'rock') {
        return "You win!";
    }
    else if (playerselection === 'scissors' && computerselection === 'paper') {
        return "You win!";
    }
    else {
        return "You Lose!";
    }

}
let playerselection = prompt("Choose your weapon").toLowerCase;
let computerselection = getComputerChoice(computerchoice);
console.log(playRound(playerselection,computerselection));


