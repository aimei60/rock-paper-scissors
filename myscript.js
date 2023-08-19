function getComputerChoice() {
    let computerchoice = ['Rock', 'Paper','Scissors'];
    return computerchoice[Math.floor(Math.random()*computerchoice.length)];
}

function playRound(playerselection, computerselection) {
    if (playerselection === computerselection) {
        return "It's a tie!";
    }
    else if (playerselection === 'rock' && computerselection === 'scissors') {
        return "You win!";
    }




}
let playerselection = 'paper'
let computerselection = getComputerChoice()
console.log(playRound(playerselection, computerselection))


