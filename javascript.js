
let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let computerChoice;
      
    let num = Math.random();
    
    if(num >= 0 && num <= 0.333 ){

        computerChoice = "rock";
    }
    else if(num > 0.333 && num <= 0.666 ){

        computerChoice = "paper";
    }
    else if(num > 0.666 && num < 1 ){

        computerChoice = "scissors";
    }
    
    computerChoice = computerChoice.toUpperCase()
    return computerChoice;
}

function getHumanChoice(){

    let humanChoice = prompt("Enter your choice (rock,paper,scissors) : ");
    humanChoice = humanChoice.toUpperCase();

    return humanChoice;
}

function playRound(computerChoice,humanChoice){
    if(computerChoice === "ROCK"){

        if(humanChoice === "PAPER"){
            console.log("HUMAN WINS!!!")
            humanScore++
        }
        else if(humanChoice === "Scissors"){
            console.log("COMPUTER WINS!!!")
            computerScore++
        }
        else if(humanChoice === "ROCK"){
            console.log("DRAW")
        }
    }
    else if(computerChoice === "PAPER"){

        if(humanChoice === "SCISSORS"){
            console.log("HUMAN WINS!!!")
            humanScore++
        }
        else if(humanChoice === "ROCK"){
            console.log("COMPUTER WINS!!!")
            computerScore++
        }
        else if(humanChoice === "PAPER"){
            console.log("DRAW")
        }
    }
    else if(computerChoice === "SCISSORS"){

        if(humanChoice === "ROCK"){
            console.log("HUMAN WINS!!!")
            humanScore++
        }
        else if(humanChoice === "PAPER"){
            console.log("COMPUTER WINS!!!")
            computerScore++
        }
        else if(humanChoice === "SCISSORS"){
            console.log("DRAW")
        }
    }
}

const computerChoice = getComputerChoice()
const humanChoice = getHumanChoice()

playRound(computerChoice,humanChoice)

