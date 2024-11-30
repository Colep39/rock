function getComputerChoice(){
    const random = Math.random() * 3;
    const choice = Math.floor(random);

    if(choice === 0) return "rock"; 
    else if(choice === 1) return "scissors"; 
    else return "paper"; 
}

function endGame(){
    let winner = '';
    if(humanScore > computerScore){
        winner = "User"
    }
    else{
        winner = "Computer"
    }
    display.innerHTML = `
        <p>The ${winner} has won the game!</p>
        <p>The User had a score of: ${humanScore} | The Computer had a score of: ${computerScore}</p>
    `;
    humanScore = 0;
    computerScore = 0;
}

function playRound(event){
    const humanChoice = this.id;
    const computerChoice = getComputerChoice();

    let message = '';
    if(humanChoice == "rock" && computerChoice == "paper"){
        computerScore++;
        message = "You lose, paper beats rock!";
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        message = "You win, rock beats scissors";
    }
    else if(humanChoice == "rock" && computerChoice == "rock"){
        message = "Tie, both chose rock";
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
        message = "You win, paper beats rock!";
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++;
        message = "You lose, scissors cut paper";
    }
    else if(humanChoice == "paper" && computerChoice == "paper"){
        message = "Its a tie, both chose paper";
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
        message = "You win, scissors cut paper";
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++;
        message = "You lose, rock smashes scissors";
    }
    else if(humanChoice == "scissors" && computerChoice == "scissors"){
        message = "It's a tie, both chose scissors";
    }

    if(computerScore >= 5 || humanScore >= 5){
        endGame(computerScore, humanScore);
    }
    else{
        display.innerHTML = `
        <p>${message}</p>
        <p>Your Score: ${humanScore} | Computer Score: ${computerScore}</p>
        `;
    }
}

let humanScore = 0;
let computerScore = 0;
const paper = document.querySelector('.paper');
const rock = document.querySelector('.rock');
const scissors = document.querySelector('.scissors');
const display = document.getElementById('result');

paper.addEventListener('click', playRound);
rock.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);


