// Computer function that will return rock paper or scissors

function getComputerChoice(){
    
    let outCome = Math.floor(Math.random() *3); // Creating values for the outcomes
    let move;

    //Assigning the numarical values to the outcomes
    if (outCome === 0){
        move = "Rock";
        return move.toUpperCase();
    } else if (outCome === 1){
        move = "Paper";
        return move.toUpperCase();
    }else if (outCome === 2){
        move = "Scissor";
        return move.toUpperCase();
    }
};

// Create a function that will get the human's choices that they enter

function getHumanChoice(){
    let move = prompt("Rock, Paper or Scissor?");
    return move.toUpperCase();
};

// function repeats(max){
//     for (i = 0; i < max; i++){
//         let move = getHumanChoice();
//         console.log(`Guesses: ${move}.`);
//     }
// }

// repeats(5);

// Creating scores for both Computer and the Player initializing at 0

let humanScore = 0;
let computerScore = 0;

// Write the logic in playing one round of the game of rock paper scissor

function playRound(humanChoice, computerChoice){
    // Loses

    if (humanChoice === "ROCK" && computerChoice === "PAPER" ||
        humanChoice === "SCISSOR" && computerChoice === "ROCK" ||
        humanChoice === "PAPER" && computerChoice === "SCISSOR"){
            computerScore ++;
            return (`You lose! ${computerChoice} beats ${humanChoice}!`)
        } else if (
            humanChoice === "PAPER" && computerChoice === "ROCK" ||
            humanChoice === "ROCK" && computerChoice === "SCISSOR" ||
            humanChoice === "SCISSOR" && computerChoice === "PAPER"
        ){
            humanScore++;
            return(`You Win! ${humanChoice} beats ${computerChoice}!`)
        }else{
            return(`Draw Game!`)
        }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);
