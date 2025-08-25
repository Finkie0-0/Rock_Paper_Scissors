// Create a function to get the computer's choice; Represented a Rock, Paper and Scissors
// use the math.random () function
// Make the scope of math.random() function shrink to accommodate the three outputs

// If math.floor(math.random() * 4) === 0;
    // return Rock
// else if math.floor(math.random() *4 == 1);
    // return Paper
// else
    // return Scissors

// Start coding the computer's choice function

function getComputerChoice(){
    let move = Math.floor(Math.random() * 3);

    if (move === 0){
        return (`rock`);
    } else if( move === 1){
        return (`paper`);
    }else{
        return (`scissors`);
    } 
}

// Create a function that will take in a users's input
// Ensure that the input is a string
// Use the prompt method to get the use's input

//move = prompt("What's if your move? ");
//return move

//Make the user choice function

function getHumanChoice(){
    let move = prompt("What is your move, Rock, Paper or Scissors? ");
    return (move);
};

//Create the scores for both the Human and the computer.
//Start both side as zero

let humanScore = 0;
let computerScore = 0;

//Ensure that the human's input is case sensitive and create a logic function between both the players
//Take the humanChoice and computerChoices as the parameters of the the function that deals with the rules
// Return a winning message after the choices have been compared and logically modified
// Increase the score of the winner after the playing

//Rock beats Scissors
// Rock loses against paper
//Paper beats Rock
// Paper loses against Scissors
//Scissors beat Paper
// Scissors loses against Rock

// humanChoice.toLowerCase()

function playRound (computerChoice, humanChoice){
    
    //Human loses
    let ruling = "";
    if (computerChoice === "rock" && humanChoice === "scissors"){
        computerScore ++;
        ruling = "You lose! Rock beats Scissor.";
        return ruling;
    }else if (computerChoice === "scissors" && humanChoice === "paper"){
        computerScore ++;
        ruling ="You lose! Scissor beats Paper.";
        return ruling;
    }else if (computerChoice === "paper" && humanChoice === "rock"){
        computerScore ++;
        ruling = "You lose! Paper beats Rock.";
        return ruling;
    }

    //Human wins

    else if(humanChoice === "rock" && computerChoice === "scissos"){
        humanScore ++;
        ruling = "You win! Rock beats Scissor.";
        return ruling;
    }else if ( humanChoice === "scissors" && computerChoice === "paper"){
        humanScore ++;
        ruling = "You win! Scissor beats Paper.";
        return ruling;
    }else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore ++;
        ruling = "You win! Paper beats Rock.";
        return ruling;
    };

    //Draws

    if (computerChoice == humanChoice){
        ruling = "Draw";
        return `Ruling ${ruling} and the score for computer: ${computerScore} vs human ${humanScore}`;
    };

};

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();

// console.log (computerSelection);
// console.log(humanSelection);

console.log(playRound(computerSelection,humanSelection));

