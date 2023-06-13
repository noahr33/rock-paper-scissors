
var wins = 0;
var losses = 0;
var ties = 0;

var choices = ["R", "P", "S"]

var keepPlaying = true


while (keepPlaying) {
    // player chooses R, P, S
    var humanChoice = prompt("Choose R, P, S")


        // computer randomly chooses
    var randomNum = Math.floor( Math.random() * 3 )
    var computerChoice = choices[randomNum]


    if (
        humanChoice === "S" && computerChoice === "P" ||
        humanChoice === "R" && computerChoice === "S" ||
        humanChoice === "P" && computerChoice === "R" 
    ) {
        alert("You won!")
        wins++
    } else if (humanChoice === computerChoice) {
        alert("Round tied!")
        ties++
    } else {
        alert("You lost!")
        losses++
    }

    alert("Wins: " + wins + "\nTies: " + ties + "\nLosses: " + losses)
    
    
    keepPlaying = confirm("Want to play again?")
}

alert("Play again soon!")