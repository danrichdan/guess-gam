// Define UI Variables
const guessBtn = document.getElementById("guess-button");
const guessInput = document.getElementById("guess");
const numberToGuess = getRandomNumber();
const msg = document.querySelector(".help");

// Define Game Variables
let guessesLeft = 3;

// Event Listener
guessBtn.addEventListener("click", evaluateGuess);

// Generate a Random Number
function getRandomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

// Evaluate the Guesses
function evaluateGuess() {
  let guess = guessInput.value;
  guess = Number(guess);
  if (guess < 1 || guess > 10) {
    msg.textContent = "Enter a number between 1 and 10";
    msg.style.color = "red";
    msg.style.display = "block";
  } else {
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
}

// Game Ending Functionality, win or lose
function gameEnd(gameState) {
  // Disable the input
  guessInput.setAttribute("disabled", "true");

  // Add win or lose colors to input and message
  guessInput.classList.add(`is-${gameState}`);
  msg.classList.add(`is-${gameState}`);

  // Restart Game
  guessBtn.textContent = "Play Again";
  guessBtn.removeEventListener("click", evaluateGuess);
  guessBtn.addEventListener("click", function () {
    window.location.reload();
  });
}

// Display the Message
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
