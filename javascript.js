function getComputerChoice(){
    let choice;
      
    let num = Math.random();
    
    if(num >= 0 && num <= 0.333 ){

        choice = "rock"
    }
    else if(num > 0.333 && num <= 0.666 ){

        choice = "paper"
    }
    else if(num > 0.666 && num < 1 ){

        choice = "scissors"
    }
    
    return choice
}
