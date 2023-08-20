let computerchoice = ['rock', 'paper','scissors'];
function getComputerChoice(computerchoice) {
    return computerchoice[Math.floor(Math.random()*computerchoice.length)];
}

let playerscore = 0
let computerscore = 0

function playRound (playerselection, computerselection){
        console.log(playerselection, computerselection);
    
if (playerselection === computerselection){
    return "It's a tie!";
    }
else if (playerselection === 'rock' && computerselection === 'scissors'){
    playerscore = 1;
    return "You win! " + playerselection + " " + "beat " + computerselection;
    }
else if (playerselection === 'paper' && computerselection === 'rock'){
    playerscore = 1;
    return "You win! " + playerselection + " " + "beat " + computerselection;
    }
else if (playerselection === 'scissors' && computerselection === 'paper'){
    playerscore = 1;
    return "You win! " + playerselection + " " + "beat " + computerselection;
    }

else {
    computerscore = 1;
    return "You Lose! " + computerselection + " " + "beat " + playerselection;
    }

}



const playerselection = prompt("Choose your weapon").toLowerCase();
const computerselection = getComputerChoice(computerchoice);

console.log(playRound(playerselection,computerselection));
console.log(computerscore)
console.log(playerscore)



