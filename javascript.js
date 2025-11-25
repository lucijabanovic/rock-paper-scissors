
function getComputerChoice() {
    let a = Math.random();
    if (a < 1/3) {
        return "rock";
    } else if (1/3 <= a && a < 2/3) {
        return "paper";
    } else return "scissors";
}

function getHumanChoice() {
    let guess = prompt("Choose rock/paper/scissors.");
    return guess;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;  

    function playRound(humanChoice, computerChoice) {
        
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        console.log(`Computer: ${computerChoice}`);
        console.log(`You: ${humanChoice}`);

        humanCapitalized = humanChoice.at(0).toUpperCase() + humanChoice.slice(1);
        computerCapitalized = computerChoice.at(0).toUpperCase() + computerChoice.slice(1);

        if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore ++;
            return `You lose! ${computerCapitalized} beats ${humanCapitalized}.`;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore ++;
            return `You win! ${humanCapitalized} beats ${computerCapitalized}.`;
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore ++;
            return `You lose! ${computerCapitalized} beats ${humanCapitalized}.`;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore ++;
            return `You win! ${humanCapitalized} beats ${computerCapitalized}.`;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore ++;
            return `You lose! ${computerCapitalized} beats ${humanCapitalized}.`;
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore ++;
            return `You win! ${humanCapitalized} beats ${computerCapitalized}.`;
        } else return "It's a tie.";

    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }

    if (humanScore > computerScore) {
        console.log(`You are the winner! The final score is ${humanScore}:${computerScore}`);
    } if (humanScore < computerScore) {
        console.log(`You lose! The final score is ${humanScore}:${computerScore}`);
    } else {
        console.log(`It's a tie! The final score is ${humanScore}:${computerScore}`);
    }

}

playGame();
