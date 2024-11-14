function getComputerChoice(){
    const random = Math.random() * 3;
    const choice = Math.floor(random);

    if(choice === 0){
        return "rock";
    }
    else if(choice === 1){
        return "scissors";
    }
    else{
        return "paper";
    }
}

function getHumanChoice(){
    const message = "Lets Play a Game, Enter one of: paper, rock, scissors";
    let choice = prompt(message);
    if(choice == "rock"){
        return "rock";
    }
    else if(choice == "scissors"){
        return "scissors";
    }
    else{
        return "paper";
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == "rock" && computerChoice == "paper"){
        computerScore++;
        console.log("You lose, paper beats rock!")
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        console.log("You win, rock beats scissors");
    }
    else if(humanChoice == "rock" && computerChoice == "rock"){
        console.log("Tie, both chose rock");
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
        console.log("You win, paper beats rock!");
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++;
        console.log("You lose, scissors cut paper");
    }
    else if(humanChoice == "paper" && computerChoice == "paper"){
        console.log("Its a tie, both chose paper");
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
        console.log("You win, scissors cut paper");
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++;
        console.log("You lose, rock smashes scissors");
    }
    else if(humanChoice == "scissors" && computerChoice == "scissors"){
        console.log("Its a tie, both are lesbians");
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        let h = getHumanChoice();
        let c = getComputerChoice();
        playRound(h, c);
    }
    if (humanScore > computerScore){
        console.log("The user has won");
    }
    else if(humanScore < computerScore){
        console.log("The computer has bested the user");
    }
    else{
        console.log("Ian Hawke declares this as a tie");
    }
}


let humanScore = 0;
let computerScore = 0;
playGame();


