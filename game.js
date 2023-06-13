
var wins = 0;
var loses = 0;
var ties = 0;

var choices = ["R", "P", "S"]

// player chooses R, P, S
var humanChoice = prompt("Choose R, P, S")
 console.log(humanChoice)

    // computer randomly chooses
var randomNum = Math.floor(Math.random() * 3)
console.log(choices[randomNum])


// compare choices
    // if humanChoice is R and computerChoise is S OR
    // if humanChoice is P and computerChoise is R OR
    // if humanChoice is S and computerChoise is P OR
        // alert that we won
        // increse wins
    // if humanChoise === computerChoice
        // alert that we tied
    // else
        // alert that we lost
        // inscrease loses

// ask user "do you want to play again?"
    // if yes
        // restart game
    // if no
        // exit game