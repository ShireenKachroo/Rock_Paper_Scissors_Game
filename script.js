let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");

const generateCompChoice = () => {
    // choose from rock paper scissors
    let options = ["rock", "paper", "scissors"];
    let randIndex = Math.floor(Math.random() * 3);  // to get range of indices from 0 to 2, randomly removing decimal numbers
    return options[randIndex];
}

const msg = document.querySelector("#msg");
const popUp = document.querySelector("#popUp");

const drawGame = () => {
    msg.innerText = "It's a draw";
	popUp.innerText = "try again buddy : )";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "Congratulations, You Won!";
        popUp.innerText = `Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    } 
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose, Better luck next time!";
        popUp.innerText = `${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}

const playGame = (userChoice) => {
    // generate computer choice
    const compChoice = generateCompChoice();

    if (userChoice === compChoice) {
        // match draw
        drawGame();
    } 
    else {
        let userWin = true;
        if (userChoice === "rock") {
            // comp might have generated scissors/paper
            userWin = compChoice === "paper" ? false : true;
        } 
        else if (userChoice === "paper") {
            // comp might have generated scissors/rock
            userWin = compChoice === "scissors" ? false : true;
        }
        else if (userChoice === "scissors") {
            // comp might have generated rock/paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

