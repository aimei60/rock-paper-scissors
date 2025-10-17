
// Game and UI secion
let playerscore = 0;
let computerscore = 0;
let rounds = 0;
let gameIsActive = true;

//selecting all of the moving components
const mistletoe = document.querySelector(".mistletoe-picture1");
const candycane = document.querySelector(".candy-cane-picture1");
const christmaspudding = document.querySelector(".christmas-pudding-picture1");
const playerscore_results = document.querySelector(".player-score")
const computerscore_results = document.querySelector(".computer-score")
const result = document.querySelector(".result-section")
const rounds_result = document.querySelector(".Rounds")
const final_result = document.querySelector(".final-results")
const final_score = document.querySelector(".score")
const compMistletoe = document.querySelector("M2");
const compCandyCane = document.querySelector("C2");
const compChristmasPudding = document.querySelector("CP2");
const playagain = document.querySelector(".play-again")

//define computer choice
function getComputerChoice() {
    const choices = ['Christmas pudding', 'Mistletoe', 'Candy cane'];
    const compSelection = choices[Math.floor(Math.random() * choices.length)];

    if (compSelection === 'Christmas pudding'){
        CP2.classList.add("highlight");
        setTimeout(function() {CP2.classList.remove("highlight")}, 400);
    } else if (compSelection === 'Mistletoe') {
        M2.classList.add("highlight");
        setTimeout(function() {M2.classList.remove("highlight")}, 400);
    } else if (compSelection === 'Candy cane') {
        C2.classList.add("highlight");
        setTimeout(function() {C2.classList.remove("highlight")}, 400);
    }
    return compSelection;
}

//define winner wording
function win(user, comp) {
    playerscore++;
    playerscore_results.textContent = "Player score: " + playerscore;
    computerscore_results.textContent = "Computer score: " + computerscore;
    result.textContent = user + " beats " + comp + ". You win!"

}

//define loser wording
function lose(user, comp) {
    computerscore++;
    playerscore_results.textContent = "Player score: " + playerscore;
    computerscore_results.textContent = "Computer score: " + computerscore;
    result.textContent = user + " loses to " + comp + ". You lose!"
    
}

//define tie wording
function tie(user, comp) {
    result.textContent = "You both picked " + user +". It's a draw!"
}

//making the tropes clickable
function main() {
    mistletoe.addEventListener('click', function() {
        game1("Mistletoe")
    })
    candycane.addEventListener('click', function() {
        game1("Candy cane")
    })
    christmaspudding.addEventListener('click', function() {
        game1("Christmas pudding")
    })

}
main();

//defining the winner or loser or if its a tie
function game1(playerchoice) {
    const computer = getComputerChoice();
    if (gameIsActive) {
        switch (playerchoice + " " + computer) {
            case "Christmas pudding Candy cane":
            case "Mistletoe Christmas pudding":
            case "Candy cane Mistletoe":
                win(playerchoice, computer);
                break;
            case "Christmas pudding Mistletoe":
            case "Mistletoe Candy cane":
            case "Candy cane Christmas pudding":
                lose(playerchoice, computer);
                break;
            case "Christmas pudding Christmas pudding":
            case "Mistletoe Mistletoe":
            case "Candy cane Candy cane":
                tie(playerchoice, computer);
                break;
            
        } rounds++;
    }

    // calculating the winner and their score
    if (playerscore === 5 || computerscore === 5) {
        gameIsActive = false;
        CP2.classList.remove("highlight");
        M2.classList.remove("highlight");
        C2.classList.remove("highlight");

        if (playerscore > computerscore) {
            final_result.textContent = "Congratulations, you win the game!"
        } else if (playerscore < computerscore) {
            final_result.textContent = "Sorry, you lost the game!"
        } else {
            final_result.textContent = "It's a tie!"
        }

        final_score.textContent = "Final scores are: Player:" + " " + playerscore + " " + "Computer:" + " " + computerscore
    }
}

// restarts the game after its finished
function refreshPage() {
    window.location.reload(true);
}
playagain.addEventListener('click', refreshPage)







    
   






