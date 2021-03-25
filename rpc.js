//Rock Paper Scissors -> using prompt and alert

//Random computer choice generator
let compChoice = () => {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let randomChoice = choices[randomIndex];
    return randomChoice
}

//Score Variables
let userScore = 0;
let compScore = 0;

//Update User Score and Computer Score
let updateUserScore = () => {
    userScore += 1;
    return userScore
}

let updateCompScore = () => {
    compScore += 1;
    return compScore
}

//gameplay function -> find better way to do this
let gameplay = (compChoice) => {
    let userInput = prompt("Choose Rock, Paper or Scissors: ");
    if (userInput === compChoice()) {
        alert(`It's a tie, your score is ${userScore} and the computers score is ${compScore}`);
    } else if (userInput === "rock" && compChoice() === "scissors") {
        updateUserScore();
        alert(`You win, your score is ${userScore} and the computers score is ${compScore}`);
    } else if (userInput === "rock" && compChoice() === "paper") {
        updateCompScore();
        alert(`You lose, your score is ${userScore} and the computers score is ${compScore}`);
    } else if (userInput === "paper" && compChoice() === "rock") {
        updateUserScore();
        alert(`You win, your score is ${userScore} and the computers score is ${compScore}`);
    } else if (userInput === "paper" && compChoice() === "scissors") {
        updateCompScore();
        alert(`You lose, your score is ${userScore} and the computers score is ${compScore}`);
    } else if (userInput === "scissors" && compChoice() === "paper") {
        updateUserScore();
        alert(`You win, your score is ${userScore} and the computers score is ${compScore}`);
    } else if (userInput === "scissors" && compChoice() === "rock") {
        updateCompScore();
        alert(`You lose, your score is ${userScore} and the computers score is ${compScore}`);
    }
}

// Run the game until 5 wins
while (userScore < 5 || compScore < 5) {
    gameplay(compChoice)
    if (userScore === 5 || compScore === 5) {
        (userScore === 5) ? alert("You Win The Game"): alert("You Lose the Game");
            userScore = 0;
            compScore = 0;
            let play = prompt("Wanna play again? ").toLowerCase();
            if (play === 'yes') {
                gameplay(compChoice);
            } else if (play === 'no') {
                alert("Thanks for playing");
                break
            }
        } 
}





  