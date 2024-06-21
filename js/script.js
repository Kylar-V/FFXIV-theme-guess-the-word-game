const wordInProgress = document.querySelector(".word-in-progress");
const guessInput = document.querySelector(".letter");
const playAgainButton = document.querySelector(".btn-play-again");
const guessButton = document.querySelector(".btn-guess");
const hintButton = document.querySelector(".btn-hint");
const message = document.querySelector(".message");
const remainingText = document.querySelector(".remaining span");
const guessedLettersElement = document.querySelector(".guessed-letters");

const wordData = [
  "Eorzea", "Hydaelyn", "A Realm Reborn", "Heavensward", "Stormblood",
  "Shadowbringers", "Endwalker", "Warrior of Light", "Warrior of Darkness",
  "Crystal Exarch", "Garlemald", "Ishgard", "Limsa Lominsa", "Gridania",
  "Ul'dah", "Ala Mhigo", "Doma", "Hildibrand", "Primals", "Ascian",
  "Crystal Tower", "Omega", "Eden", "Alexander", "Bahamut", "Ifrit",
  "Titan", "Garuda", "Leviathan", "Ramuh", "Shiva", "Ravana", "Bismarck",
  "Thordan", "Nidhogg", "Zenos", "Y'shtola", "Thancred", "Alphinaud",
  "Alisaie", "Estinien", "Aymeric", "Merlwyb", "Kan-E-Senna", "Raubahn",
  "Gaius", "Paladin", "Warrior", "Dark Knight", "Gunbreaker", "White Mage",
  "Scholar", "Astrologian", "Monk", "Dragoon", "Ninja", "Samurai", "Bard",
  "Machinist", "Dancer", "Black Mage", "Summoner", "Red Mage", "Blue Mage",
  "Carpenter", "Blacksmith", "Armorer", "Goldsmith", "Leatherworker",
  "Weaver", "Alchemist", "Culinarian", "Miner", "Botanist", "Fisher"
];

let word;
let remainingGuesses = 10;
let guessedLetters = [];
let hintUsed = false;



const getWord = function () {
  if (wordData.length === 0) {
    console.error("Word data array is empty.");
    return;
  }
  const randomIndex = Math.floor(Math.random() * wordData.length);
  word = wordData[randomIndex].toLowerCase();
  placeholder(word);
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
    guessInput.value = "";
    return false;
  } else if (!input.match(acceptedLetter)) {
    message.innerText = "Please enter a letter between A and Z.";
    guessInput.value = "";
    return false;
  } else {
    return true;
  }
};

const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    message.innerText = "You have already guessed that letter! Guess again!";
    guessInput.value = "";
  } else {
    guessedLetters.push(guess);
    if (!word.toUpperCase().includes(guess)) {
      updateGuessesRemaining(guess);
    }
    showGuessedLetters();
    updateWordInProgress(guessedLetters);
    guessInput.value = "";
  }
};

const showGuessedLetters = function () {
  guessedLettersElement.innerHTML = "";
  const incorrectLetters = guessedLetters.filter(
    letter => !word.toUpperCase().includes(letter)
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
      revealWord.push(" ");
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
  const loseSound = document.getElementById("incorrectGuessSound");
  if (loseSound) {
    loseSound.play();
  }
};

const updateGuessesRemaining = function (guess) {
  const upperWord = word.toUpperCase();
  if (!upperWord.includes(guess)) {
    remainingGuesses -= 1;
    message.innerText = `Nope! Guess again because this word doesn't have a ${guess} in it.`;
  } else {
    message.innerText = `Good Job! You guessed correctly! The word has the letter ${guess}.`;
  }

  if (remainingGuesses <= 0) {
    message.innerHTML = `Game over! You've used up all your guesses. The word was <span class="highlight">${word}</span>.`;
    playLoseSound();
    disableInputAndButtons();
    showPlayAgainButton();
    guessButton.classList.add("hide");
    remainingText.innerText = "0 guesses";
  } else if (remainingGuesses === 1) {
    remainingText.innerText = `${remainingGuesses} guess`;
  } else {
    remainingText.innerText = `${remainingGuesses} guesses`;
  }
};

const playWinSound = function () {
  const winSound = document.getElementById("winSound");
  if (winSound) {
    winSound.play();
  }
};

const checkIfWin = function () {
  if (word.toUpperCase() === wordInProgress.innerText) {
    message.classList.add("win");
    message.innerHTML = `<p class="highlight">Congratulations! You guessed it correctly!</p>`;
    playWinSound();
    disableInputAndButtons();
    showPlayAgainButton();
    remainingText.classList.add("hide");
  }
};

const disableInputAndButtons = function () {
  guessInput.disabled = true;
  guessButton.disabled = true;
  hintButton.disabled = true;
};

const showPlayAgainButton = function () {
  playAgainButton.classList.remove("hide");
  guessButton.classList.add("hide");
  hintButton.classList.add("hide");
};

const startNewGame = function () {
  guessedLetters = [];
  remainingGuesses = 10;
  remainingText.innerText = `${remainingGuesses} guesses`;
  guessedLettersElement.innerHTML = "";
  message.innerText = "";
  getWord();
  placeholder(word);

  playAgainButton.classList.add("hide");
  guessButton.classList.remove("hide");
  hintButton.classList.remove("hide");
  remainingText.classList.remove("hide");
  guessInput.disabled = false;
  guessButton.disabled = false;
  hintButton.disabled = false;
  hintButton.classList.remove("hide");
  hintUsed = false; // Reset hintUsed to false for new game
};

playAgainButton.addEventListener("click", function () {
  startNewGame();
});

startNewGame();

guessButton.addEventListener("click", function (event) {
  event.preventDefault();
  const guess = guessInput.value.toLowerCase();
  if (validateInput(guess)) {
    makeGuess(guess);
  }
});

hintButton.addEventListener("click", function () {
  if (!hintUsed) {
    const wordArray = word.toUpperCase().split("");
    const remainingLetters = wordArray.filter(
      letter => !guessedLetters.includes(letter) && letter !== " "
    );

    if (remainingLetters.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingLetters.length);
      const hintLetter = remainingLetters[randomIndex];

      guessedLetters.push(hintLetter);
      updateWordInProgress(guessedLetters);

      hintUsed = true;
      hintButton.disabled = true;
      hintButton.classList.add("hide");
    }
  }
});
