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
        return (`Rock`);
    } else if( move === 1){
        return (`Paper`);
    }else{
        return (`Scissors`);
    } 
}

// Create a function that will take in a users's input
// Ensure that the input is a string
// Use the prompt method to get the use's input

//move = prompt("What's if your move? ");
//return move