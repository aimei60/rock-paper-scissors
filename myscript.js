
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
const final_result = document.querySelector(".final-results")
const final_score = document.querySelector(".score")
const compMistletoe = document.querySelector("M2");
const compCandyCane = document.querySelector("C2");
const compChristmasPudding = document.querySelector("CP2");

function getComputerChoice() {
    const choices = ['christmas pudding', 'mistletoe', 'candy cane'];
    const compSelection = choices[Math.floor(Math.random() * choices.length)];

    if (compSelection === 'christmas pudding'){
        CP2.classList.add("highlight");
        setTimeout(function() {CP2.classList.remove("highlight")}, 400);
    } else if (compSelection === 'mistletoe') {
        M2.classList.add("highlight");
        setTimeout(function() {M2.classList.remove("highlight")}, 400);
    } else if (compSelection === 'candy cane') {
        C2.classList.add("highlight");
        setTimeout(function() {C2.classList.remove("highlight")}, 400);
    }
    return compSelection;
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
        game1("mistletoe")
    })
    candycane.addEventListener('click', function() {
        game1("candy cane")
    })
    christmaspudding.addEventListener('click', function() {
        game1("christmas pudding")
    })

}
main();

function game1(playerchoice) {
    const computer = getComputerChoice();
    if (gameIsActive) {
        switch (playerchoice + " " + computer) {
            case "christmas pudding candy cane":
            case "mistletoe christmas pudding":
            case "candy cane mistletoe":
                win(playerchoice, computer);
                break;
            case "christmas pudding mistletoe":
            case "mistletoe candy cane":
            case "candy cane christmas pudding":
                lose(playerchoice, computer);
                break;
            case "christmas pudding christmas pudding":
            case "mistletoe mistletoe":
            case "candy cane candy cane":
                tie(playerchoice, computer);
                break;
            
        } rounds++;
        rounds_result.textContent = "Round: " + rounds
    }

    if (playerscore === 5 || computerscore === 5) {
        gameIsActive = false;

        if (playerscore > computerscore) {
            final_result.textContent = "Congratulations, you win!"
        } else if (playerscore < computerscore) {
            final_result.textContent = "Sorry, you lose!"
        } else {
            final_result.textContent = "It's a tie!"
        }

        final_score.textContent = "Final scores are: Player:" + " " + playerscore + " " + "Computer:" + " " + computerscore
    }
    
    
}








    
   






