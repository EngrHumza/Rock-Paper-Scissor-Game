let playerChoice, computerChoice, randomNum, playAgain; // variables for storing players choice

let choice1 = "rock";
let choice2 = "paper";
let choice3 = "scissor";

function computer_Choice() {
    if(randomNum === 0){
        return choice1;
    }
    else if(randomNum === 1){
        return choice2;
    }
    else{
        return choice3;
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice){
        // alert("Game Tied");
        console.log("Game Tied");
    }
    else if(playerChoice === choice1 && computerChoice === choice3 || playerChoice === choice2 && computerChoice === choice1 || playerChoice === choice3 && computerChoice === choice2){
        console.log("Player1 Wins");
    }
    else{
        console.log("Computer Wins");
    }
}
do{
    playerChoice = prompt("Enter your choice rock|paper|scissor: ").toLowerCase();
    computerChoice = computer_Choice();
    randomNum = Math.floor(Math.random()*3);
    playRound(playerChoice, computerChoice);
    playAgain = prompt("Do you want to play again?: ").toLowerCase();
}while(playAgain === "yes");