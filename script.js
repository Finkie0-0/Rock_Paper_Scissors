// Computer function that will return rock paper or scissors

function getComputerChoice(){
    
    let outCome = Math.floor(Math.random() *3); // Creating values for the outcomes
    let move;

    //Assigning the numarical values to the outcomes
    if (outCome === 0){
        move = "Rock";
        return move.toLowerCase();
    } else if (outCome === 1){
        move = "Paper";
        return move.toLowerCase();
    }else if (outCome === 2){
        move = "Scissor";
        return move.toLowerCase();
    }
};
console.log(getComputerChoice())