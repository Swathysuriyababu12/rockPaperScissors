const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const yourText = document.querySelector("#yourscore");
const computerrText = document.querySelector("#computerscore");
const choiceBtns = document.querySelectorAll(".choiceBtn");

const div = document.querySelector("#gameDiv");
let player;
let computer;
let result;
let Computerscore = 0;
let yourScore = 0;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    score();
    displayWinner();
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
}
function checkWinner() {
  if (player == computer) {
    return "Draw!";
  } else if (computer == "ROCK") {
    return player == "PAPER" ? "You Win!" : "You Lose!";
  } else if (computer == "PAPER") {
    return player == "SCISSORS" ? "You Win!" : "You Lose!";
  } else if (computer == "SCISSORS") {
    return player == "ROCK" ? "You Win!" : "You Lose!";
  }
}

function score() {
  if (computer == player) {
    return null;
  } else if (computer == "ROCK") {
    return player == "PAPER"
      ? (yourText.textContent = `your score ${(yourScore = yourScore + 1)}`)
      : (computerrText.textContent = `computer score ${(Computerscore =
          Computerscore + 1)}`);
  } else if (computer == "PAPER") {
    return player == "ROCK"
      ? (computerrText.textContent = `computer score ${(Computerscore =
          Computerscore + 1)}`)
      : (yourText.textContent = `your score ${(yourScore = yourScore + 1)}`);
  } else if (computer == "PAPER") {
    return player == "SCISSORS"
      ? (yourText.textContent = `your score ${(yourScore = yourScore + 1)}`)
      : (computerrText.textContent = `computer score ${(Computerscore =
          Computerscore + 1)}`);
  } else if (computer == "SCISSORS") {
    return player == "PAPER"
      ? (computerrText.textContent = `computer score ${(Computerscore =
          Computerscore + 1)}`)
      : (yourText.textContent = `your score ${(yourScore = yourScore + 1)}`);
  } else if (computer == "SCISSORS") {
    return player == "ROCK"
      ? (yourText.textContent = `your score ${(yourScore = yourScore + 1)}`)
      : (computerrText.textContent = `computer score ${(Computerscore =
          Computerscore + 1)}`);
  } else if (computer == "ROCK") {
    return player == "SCISSORS"
      ? (computerrText.textContent = `computer score ${(Computerscore =
          Computerscore + 1)}`)
      : (yourText.textContent = `your score ${(yourScore = yourScore + 1)}`);
  }
}

function displayWinner() {
  if (yourScore === 3 || Computerscore === 3) {
    div.remove();
    const divi = document.createElement("div");
    divi.className = "result";
    document.body.appendChild(divi);

    return yourScore === 3
      ? (divi.textContent = "You win")
      : (divi.textContent = "computer wins");
  }
}
