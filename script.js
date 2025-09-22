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


function getHumanChoice(){
    let move = prompt("Rock, Paper or Scissor?");
    return move.toUpperCase();
};


let humanScore = 0;
let computerScore = 0;

// Write the logic in playing one round of the game of rock paper scissor

for (i = 1; i < 6; i ++){
        function playRound(humanChoice, computerChoice){
    
        // Lose for human


        if (humanChoice === "ROCK" && computerChoice === "PAPER" ||
            humanChoice === "SCISSOR" && computerChoice === "ROCK" ||
            humanChoice === "PAPER" && computerChoice === "SCISSOR"){
                return 0;
            }

            // Wins for human

            else if (
                humanChoice === "PAPER" && computerChoice === "ROCK" ||
                humanChoice === "ROCK" && computerChoice === "SCISSOR" ||
                humanChoice === "SCISSOR" && computerChoice === "PAPER"
            ){
                return 1;
            }

            // Draw game

            else{
                return(`Draw Game!`)
            }
        }

    }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// The Game between the user and the Computer
// Human has to enter 3 
function repeats(max = 5){
    for (i = 0; i < max; i++){
        let humanMove = getHumanChoice();
        let computerMove = getComputerChoice();
        let drawGame = "Draw Game";

        if (humanMove === "ROCK" && computerMove === "PAPER" || humanMove === "PAPER" && computerMove === "SCISSOR" || humanMove === "SCISSOR" && computerMove === "ROCK"){
            computerScore++;
        }else if (humanMove == computerMove){
            console.log(drawGame);            
        }else{
            humanScore++;
        }
        
    }
    console.log(`Human score: ${humanScore} vs Computer score: ${computerScore}.`);
    if (humanScore > computerScore){
        console.log(`You win!`);
    }else if(humanScore < computerScore){
        console.log(`You lose! Better luck next time!`);
    }else if( humanScore == computerScore){
        console.log(`This is a draw game my guy!`);
    }
}

repeats(5);