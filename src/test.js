console.log("Script is running");

function getComputerChoice(){

    const choices = ['rock','paper','scissors'];
    let rand = Math.floor(Math.random() * 3);
    return choices[rand];
}


function playRound(playerChoice, computerChoice){z
    playerChoice = playerChoice.toLowerCase();
    if(playerChoice === computerChoice){
        return "It's a tie!";
    }
    else if(playerChoice === "paper" && computerChoice === "rock"){
        return `You win! ${playerChoice} beats ${computerChoice}`;
    }
    else if(playerChoice === "rock" && computerChoice === "scissors"){
        return `You win! ${playerChoice} beats ${computerChoice}`;
    }
    else if(playerChoice === "scissors" && computerChoice === "paper"){
        return `You win! ${playerChoice} beats ${computerChoice}`;
    }
    else { return `You lose! ${computerChoice} beats ${playerChoice}` };

}

function game(){

    for(let i =0; i <= 4;i++){
        const computerChoice = getComputerChoice();
        z = prompt("Pick your choice: ");
        console.log(playRound(z, computerChoice));
    }
}

game();