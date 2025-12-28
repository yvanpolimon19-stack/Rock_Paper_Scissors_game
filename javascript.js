function getComputerChoice(){
    let computerChoice;
      
    let num = Math.random();
    
    if(num >= 0 && num <= 0.333 ){

        computerChoice = "rock"
    }
    else if(num > 0.333 && num <= 0.666 ){

        computerChoice = "paper"
    }
    else if(num > 0.666 && num < 1 ){

        computerChoice = "scissors"
    }
    
    return computerChoice
}

function getHumanChoice(){

    let humanChoice = prompt("Enter your choice (rock,paper,scissors) : ")

    return humanChoice


}
