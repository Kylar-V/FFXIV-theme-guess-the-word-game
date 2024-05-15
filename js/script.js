const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".btn-guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".btn-play-again");

let word = "fire";
let guessedLetters = [];
let remainingGuesses = 12;

const placeholder = function (word) {
  const placeholderLetters = [];
  for (const letter of word) {
    if (letter === " ") {
      placeholderLetters.push(" ");
    } else {
      placeholderLetters.push("●");
    }
  }
  wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
  e.preventDefault();

  message.innerText = "";

  const guess = letterInput.value;

  const goodGuess = validateInput(guess);

  if (goodGuess) {
    makeGuess(guess);
  }
  letterInput.value = "";
});

const validateInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    message.innerText = "Please enter a letter adventurer!";
  } else if (input.length > 1) {
    message.innerText = "Please enter a single letter.";
  } else if (!input.match(acceptedLetter)) {
    message.innerText = "Please enter a letter Between A & Z.";
  } else {
    return input;
  }
};

const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    message.innerText = "You have already guessed that letter! Try again!";
  } else {
    guessedLetters.push(guess);
    updateGuessesRemaining(guess);
    showGuessedLetters();
    updateWordInProgress(guessedLetters);
  }
};

const showGuessedLetters = function () {
  guessedLettersElement.innerHTML = "";
  for (const letter of guessedLetters) {
    const li = document.createElement("li");
    li.innerText = letter;
    guessedLettersElement.append(li);
  }
};

const updateWordInProgress = function (guessedLetters) {
  const wordUpper = word.toUpperCase();
  const revealWord = [];
  for (const letter of wordUpper) {
    if (guessedLetters.includes(letter)) {
      revealWord.push(letter);
    } else if (letter === " ") {
      revealWord.push(" ");
    } else {
      revealWord.push("●");
    }
  }

  wordInProgress.innerText = revealWord.join("");
  checkIfWin(revealWord); // Pass the revealWord to the checkIfWin function
};

const incorrectGuessSound = document.getElementById("incorrectGuessSound");

const playIncorrectGuessSound = function () {
  incorrectGuessSound.play(); // Play incorrect guess sound
};

const updateGuessesRemaining = function (guess) {
  const upperWord = word.toUpperCase();
  if (!upperWord.includes(guess)) {
    message.innerText = `Sorry, but this word doesn't have a ${guess} in it.`;
    remainingGuesses -= 1;
  } else {
    message.innerText = `Good job Adventurer! You guessed correctly! The word has the letter ${guess}.`;
  }

  if (remainingGuesses === 0) {
    playIncorrectGuessSound(); // Call the function to play the incorrect guess sound
    message.innerHTML = `You have failed Adventurer! The word was <span class="highlight">${word}</span>.`;
    startOver(false); // Pass false to indicate the player lost
  } else if (remainingGuesses === 1) {
    remainingGuessesSpan.innerText = `${remainingGuesses} guess`;
  } else {
    remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
  }
};

const winSound = document.getElementById("winSound");

const playWinSound = function () {
  winSound.play(); // Play win sound
};

const checkIfWin = function (revealWord) {
  const guessedWord = revealWord.join("").toUpperCase();
  if (word.toUpperCase() === guessedWord) {
    playWinSound(); // Call the function to play the win sound
    message.classList.add("win");
    message.innerHTML = `<p class="highlight">Congratulations Adventurer! You guessed the word correctly!</p>`;
    startOver(true); // Pass true to indicate the player won
  }
};

const startOver = function (hasWon) {
  guessLetterButton.classList.add("hide");
  remainingGuessesElement.classList.add("hide");
  guessedLettersElement.classList.add("hide");
  playAgainButton.classList.remove("hide");

  // Disable the input field
  letterInput.disabled = true;

  if (hasWon) {
    message.classList.add("win");
    message.innerHTML = `<p class="highlight">Congratulations Adventurer! You guessed the word correctly!</p>`;
  } else {
    message.innerHTML = `You have failed Adventurer! The word was <span class="highlight">${word}</span>.`;
  }

  // Re-enable the input field when the player clicks the "Play Again" button
  playAgainButton.addEventListener("click", function () {
    guessedLetters = [];
    remainingGuesses = 12;
    remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
    guessedLettersElement.innerHTML = "";
    message.innerText = "";
    placeholder(word);

    // Re-enable the input field
    letterInput.disabled = false;

    // Hide the "Play Again" button
    playAgainButton.classList.add("hide");

    // Show the guess button and remaining guesses element
    guessLetterButton.classList.remove("hide");
    remainingGuessesElement.classList.remove("hide");
    guessedLettersElement.classList.remove("hide");
  });
};

