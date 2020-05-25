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
    gameEnd("success");
    displayMsg("win", guess);
  } else if (guess !== numberToGuess && guessesLeft === 0) {
    gameEnd("danger");
    displayMsg("lose", guess, guessesLeft);
  } else {
    guessInput.value = "";
    displayMsg("try again", guess, guessesLeft);
  }
}

function gameEnd(gameState) {
  guessInput.setAttribute("disabled", "true");
  guessInput.classList.add(`is-${gameState}`);
  msg.classList.add(`is-${gameState}`);
  guessBtn.textContent = "Play Again";
  guessBtn.removeEventListener("click", evaluateGuess);
  guessBtn.addEventListener("click", function () {
    window.location.reload();
  });
}

function displayMsg(gameState, guess, guessesLeft) {
  switch (gameState) {
    case "win":
      msg.textContent = `${guess} is correct. You win!`;
      break;
    case "lose":
      msg.textContent = `${guess} is wrong, ${guessesLeft} guesses left, you lose.`;
      break;
    default:
      msg.textContent = `You guessed ${guess}, wrong, ${guessesLeft} guesses left.`;
      break;
  }
  msg.style.display = "block";
}
