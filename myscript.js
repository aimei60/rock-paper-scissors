
let computerchoice = ['Rock', 'Paper','Scissor'];

let computerselection = Math.floor(Math.random()*computerchoice.length);

function playRound(playerselection, computerselection) {
    if (playerselection === computerselection) {
        return "It's a tie!";
    } else if ( 
        (playerselection === 'ROCK', 'rock', 'Rock' && computerselection === 'scissors', 'SCISSORS', 'Scissors') ||
        (playerselection === 'paper', 'PAPER', 'Paper' && computerselection === 'ROCK', 'rock', 'Rock') || 
        (playerselection === 'SCISSORS', 'scissors', 'Scissors' && computerselection === 'PAPER', 'Paper', 'paper')
    ) {
        return "You Win! Computer Lose!";
    } else {
        return "Computer Wins! You Lose!";
    }


}

let playerselection = 'rock'
console.log(playRound(playerselection, computerselection));

