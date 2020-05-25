// Define UI Variables
const guessBtn = document.getElementById("guess-button");
const guessInput = document.getElementById("guess");
const numberToGuess = getRandomNumber();
const msg = document.querySelector(".help");
let guessesLeft = 3;
console.log(`The number to guess is ${numberToGuess}`);

// Event Listener
guessBtn.addEventListener("click", evaluateGuess);

// Generate a Random Number
function getRandomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

function evaluateGuess() {
  let guess = guessInput.value;
  guess = Number(guess);
  guessesLeft -= 1;
  if (guess === numberToGuess) {
    gameWin(guess, guessesLeft);
  } else if (guess !== numberToGuess && guessesLeft === 0) {
    gameLose(guess, guessesLeft);
  } else {
    console.log(
      `You guessed ${guess}, but that is wrong, you have ${guessesLeft} guesses left.`
    );
    guessInput.value = "";
  }
}

function gameWin(guess, guessesLeft) {
  guessInput.setAttribute("disabled", "true");
  guessInput.classList.add("is-success");
  msg.classList.add("is-success");
  msg.textContent = `${guess} is correct. You win!`;
  msg.style.display = "block";
  guessBtn.textContent = "Play Again";
}

function gameLose(guess, guessesLeft) {
  guessInput.setAttribute("disabled", "true");
  guessInput.classList.add("is-danger");
  msg.classList.add("is-danger");
  msg.textContent = `${guess} is wrong, ${guessesLeft} guesses left, you lose.`;
  msg.style.display = "block";
  guessBtn.textContent = "Play Again";
}
