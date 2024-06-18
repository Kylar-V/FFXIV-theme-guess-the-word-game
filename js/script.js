const wordInProgress = document.querySelector(".word-in-progress");
const guessInput = document.querySelector(".letter");
const playAgainButton = document.querySelector(".btn-play-again");
const guessButton = document.querySelector(".btn-guess");
const hintButton = document.querySelector(".btn-hint");
const message = document.querySelector(".message");
const remainingText = document.querySelector(".remaining"); // Update this to select the correct element
const remainingGuessesSpan = document.querySelector(".remaining span"); // Select the correct span for the number
const guessedLettersElement = document.querySelector(".guessed-letters");

let word;
let remainingGuesses = 10;
let guessedLetters = [];
let hintUsed = false;

const playBackgroundMusic = function () {
  const backgroundMusic = document.getElementById("backgroundMusic");
  backgroundMusic.play();
};

const getWord = function () {
  const categoryKeys = Object.keys(wordData);
  const randomCategoryKey =
    categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
  const randomCategory = wordData[randomCategoryKey];
  const randomIndex = Math.floor(Math.random() * randomCategory.length);
  const randomWord = randomCategory[randomIndex].word.toLowerCase();
  const hint = randomCategory[randomIndex].hint;
  word = randomWord;
};

const placeholder = function (word) {
  const placeholderLetters = [];
  for (const letter of word) {
    placeholderLetters.push("●");
  }
  wordInProgress.innerText = placeholderLetters.join("");
};

const validateInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    message.innerText = "Please enter a letter.";
    return false;
  } else if (input.length > 1) {
    message.innerText = "Please enter a single letter.";
    guessInput.value = ""; // Clear the input box
    return false;
  } else if (!input.match(acceptedLetter)) {
    message.innerText = "Please enter a letter between A and Z.";
    guessInput.value = ""; // Clear the input box
    return false;
  } else {
    return true;
  }
};

const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    message.innerText = "You have already guessed that letter! Guess again!";
    guessInput.value = ""; // Clear the input box
  } else {
    guessedLetters.push(guess);
    if (!word.toUpperCase().includes(guess)) {
      updateGuessesRemaining(guess);
    }
    showGuessedLetters();
    updateWordInProgress(guessedLetters);
    guessInput.value = ""; // Clear the input box
  }
};

const showGuessedLetters = function () {
  guessedLettersElement.innerHTML = "";
  const incorrectLetters = guessedLetters.filter(
    (letter) => !word.toUpperCase().includes(letter)
  );
  for (const letter of incorrectLetters) {
    const li = document.createElement("li");
    li.innerText = letter;
    guessedLettersElement.append(li);
  }
};

const updateWordInProgress = function (guessedLetters) {
  const wordUpper = word.toUpperCase();
  const wordArray = wordUpper.split("");
  const revealWord = [];
  for (const letter of wordArray) {
    if (letter === " ") {
      revealWord.push(" "); // If the letter is a space, keep it as is
    } else if (guessedLetters.includes(letter)) {
      revealWord.push(letter.toUpperCase());
    } else {
      revealWord.push("●");
    }
  }
  wordInProgress.innerText = revealWord.join("");
  checkIfWin();
};

const playLoseSound = function () {
  const loseSound = document.getElementById("incorrectGuessSound"); // Get the lose sound element
  loseSound.play(); // Play the lose sound
};

const updateGuessesRemaining = function (guess) {
  const upperWord = word.toUpperCase();
  if (!upperWord.includes(guess)) {
    remainingGuesses -= 1;
    message.innerText = `Sorry, this word doesn't have a ${guess} in it.`;
  } else {
    message.innerText = `Nice one! You guessed correctly! The word has the letter ${guess}.`;
  }

  if (remainingGuesses <= 0) {
    message.innerHTML = `Game over! The word was <span class="highlight">${word}</span>. You've used up all your guesses.`;
    playLoseSound();
    disableInputAndButtons(); // Disable input and guess button
    showPlayAgainButton(); // Show play again button
    guessButton.classList.add("hide"); // Hide guess button
    remainingGuessesSpan.innerText = "0 guesses";
    remainingText.classList.add("hide"); // Hide the remaining guesses text
  } else if (remainingGuesses === 1) {
    remainingGuessesSpan.innerText = `${remainingGuesses} guess`;
  } else {
    remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
  }
};

const playWinSound = function () {
  const winSound = document.getElementById("winSound"); // Get the win sound element
  winSound.play(); // Play the win sound
};

const checkIfWin = function () {
  if (word.toUpperCase() === wordInProgress.innerText) {
    message.classList.add("win");
    message.innerHTML = `<p class="highlight">Congratulations! You guessed it correctly!</p>`;
    playWinSound();
    startOver(); // Call startOver function to hide guess button and show play again button
    remainingText.classList.add("hide"); // Hide the remaining guesses text
  }
};

const disableInputAndButtons = function () {
  guessInput.disabled = true;
  guessButton.disabled = true;
};

const showPlayAgainButton = function () {
  playAgainButton.classList.remove("hide");
};

playAgainButton.addEventListener("click", function () {
  location.reload();
});

playAgainButton.addEventListener("click", function () {
  message.classList.remove("win");
  guessedLetters = [];
  remainingGuesses = 10;
  remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
  guessedLettersElement.innerHTML = "";
  message.innerText = "";
  getWord(); // Generate a new word
  placeholder(word); // Update the placeholder with the new word

  guessButton.classList.remove("hide");
  playAgainButton.classList.add("hide");
  remainingText.classList.remove("hide"); // Show the remaining guesses text again
  guessedLettersElement.classList.remove("hide");
  hintUsed = false; // Reset hint usage
  hintButton.disabled = false; // Enable hint button
});

const startOver = function () {
  guessButton.classList.add("hide");
  remainingText.classList.add("hide"); // Hide the remaining guesses text
  guessedLettersElement.classList.add("hide");
  playAgainButton.classList.remove("hide");
};

guessButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission
  const guess = guessInput.value.toLowerCase();
  if (validateInput(guess)) {
    makeGuess(guess);
  }
});

hintButton.addEventListener("click", function () {
  if (!hintUsed) {
    const wordArray = word.toUpperCase().split("");
    const remainingLetters = wordArray.filter(
      (letter) => !guessedLetters.includes(letter) && letter !== " "
    );

    if (remainingLetters.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingLetters.length);
      const hintLetter = remainingLetters[randomIndex];

      guessedLetters.push(hintLetter);
      updateWordInProgress(guessedLetters);

      hintUsed = true;
      hintButton.disabled = true; // Disable the hint button after use
    }
  }
});

// Call initialization function
getWord();
placeholder(word);
playBackgroundMusic();
