// Define UI Variables
const guessBtn = document.getElementById("guess-button");
const guessInput = document.getElementById("guess");
const numberToGuess = getRandomNumber();
const msg = document.querySelector(".help");
let guessesLeft;
console.log(`The number to guess is${numberToGuess}`);

// Event Listener
guessBtn.addEventListener("click", evaluateGuess);

// Generate a Random Number
function getRandomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

function evaluateGuess() {
  let guess = guessInput.value;
  guess = Number(guess);

  if (guess === numberToGuess) {
    gameWin();
  } else {
    console.log(`You guessed ${guess}, and you lose`);
    guessInput.value = "";
  }
}

function gameWin() {
  guessInput.setAttribute("disabled", "true");
  guessInput.classList.add("is-success");
  msg.classList.add("is-success");
  msg.style.display = "block";
  guessBtn.textContent = "Play Again";
}

function wrongGuess() {
  console.log("You Lose");
}
