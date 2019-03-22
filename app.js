let userScore = 0;
let computerScore = 0;
const startGameBtn = document.getElementById("start_game");
const rockBtn = document.getElementById("r");
const paperBtn = document.getElementById("p");
const scissorsBtn = document.getElementById("s");
const intro = document.querySelector(".intro");
const userScoreSpan = document.querySelector(".user_score");
const computerScoreSpan = document.querySelector(".computer_score");
const resultMessage = document.querySelector(".result-message > h1");
const resultGame = document.querySelector(".result");

function computerChoice() {
    const choices = ["r", "p", "s"];
    const randomChoices = Math.floor(Math.random() * choices.length);
    return choices[randomChoices];
}


function convertToWords(char) {
    if (char === "r") return "Rock ";
    if (char === "p") return "Paper ";
    return "Scissors";
}

function showUserImgChoice(userChoice) {
    switch (userChoice) {
        case 'r':
            document.userImg.src = "images/rock.png";
            document.userImg.classList.add("bounceInLeft");
            setTimeout(function() {
                document.userImg.classList.remove("bounceInLeft")
            }, 700);
            break;
        case 'p':
            document.userImg.src = "images/paper.png";
            document.userImg.classList.add("bounceInLeft");
            setTimeout(function() {
                document.userImg.classList.remove("bounceInLeft")
            }, 700);
            break;
        case 's':
            document.userImg.src = "images/scissors.png";
            document.userImg.classList.add("bounceInLeft");
            setTimeout(function() {
                document.userImg.classList.remove("bounceInLeft")
            }, 700);
            break;
    }

}

function showComputerImgChoice(compChoice) {
    switch (compChoice) {
        case 'r':
            document.computerImg.src = "images/rock.png";
            document.computerImg.classList.add("bounceInRight");
            setTimeout(function() {
                document.computerImg.classList.remove("bounceInRight")
            }, 700);
            break;
        case 'p':
            document.computerImg.src = "images/paper.png";
            document.computerImg.classList.add("bounceInRight");
            setTimeout(function() {
                document.computerImg.classList.remove("bounceInRight")
            }, 700);
            break;
        case 's':
            document.computerImg.src = "images/scissors.png";
            document.computerImg.classList.add("bounceInRight");
            setTimeout(function() {
                document.computerImg.classList.remove("bounceInRight")
            }, 700);
            break;
    }

}

function win(userChoice, compChoice) {

    const headerFlash = document.getElementById("header");
    const choiceFlash = document.getElementById(userChoice);
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultMessage.innerHTML = `${convertToWords(userChoice)} beats ${convertToWords(compChoice)} User Win`;
    headerFlash.classList.add("flash_header_win");
    setTimeout(function() {
        headerFlash.classList.remove("flash_header_win")
    }, 300);
    choiceFlash.classList.add("flash_choice-win");
    setTimeout(function() {
        choiceFlash.classList.remove("flash_choice-win")
    }, 300);
    showUserImgChoice(userChoice);
    showComputerImgChoice(compChoice);
}

function lose(userChoice, compChoice) {
    const headerFlash = document.getElementById("header");
    const choiceFlash = document.getElementById(userChoice);
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultMessage.innerHTML = `${convertToWords(userChoice)} beats ${convertToWords(compChoice)} User Lose`;
    headerFlash.classList.add("flash_header_lose", "flash");
    setTimeout(function() {
        headerFlash.classList.remove("flash_header_lose")
    }, 300);
    choiceFlash.classList.add("flash_choice-lose");
    setTimeout(function() {
        choiceFlash.classList.remove("flash_choice-lose")
    }, 300);
    showUserImgChoice(userChoice);
    showComputerImgChoice(compChoice);
}

function draw(userChoice, compChoice) {

    const headerFlash = document.getElementById("header");
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultMessage.innerHTML = `${convertToWords(userChoice)} equale ${convertToWords(compChoice)}Its Draw`;
    headerFlash.classList.add("flash_header_draw");
    setTimeout(function() {
        headerFlash.classList.remove("flash_header_draw")
    }, 500);
    showUserImgChoice(userChoice);
    showComputerImgChoice(compChoice);
}

function game(userChoice) {
    const compChoice = computerChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }

    gameOver();

}

function gameOver() {
    if (userScore == 10) {
        intro.classList.remove("hide");
        userScore = 0;
        computerScore = 0;
        userScoreSpan.innerHTML = userScore;
        computerScoreSpan.innerHTML = computerScore;
        resultGame.innerHTML = "USER WIN ";
    }
    if (computerScore == 10) {
        intro.classList.remove("hide");
        userScore = 0;
        computerScore = 0;
        userScoreSpan.innerHTML = userScore;
        computerScoreSpan.innerHTML = computerScore;
        resultGame.innerHTML = "USER LOSE ";
    }

    startGameBtn.innerHTML = " Start Agine"
}

startGameBtn.addEventListener("click", function() {
    intro.classList.add("hide");
})
rockBtn.addEventListener("click", function() {
    game("r");
});

paperBtn.addEventListener("click", function() {
    game("p");
});

scissorsBtn.addEventListener("click", function() {
    game("s");
});