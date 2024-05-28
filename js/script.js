const wordData = {
  classesWords: [
    {
      word: "Paladin",
    },
    {
      word: "Warrior",
    },
    {
      word: "Dark Knight",
    },
    {
      word: "White Mage",
    },
    {
      word: "Scholar",
    },
    {
      word: "Astrologian",
    },
    {
      word: "Monk",
    },
    {
      word: "Dragoon",
    },
    { word: "Ninja" },
    {
      word: "Samurai",
    },
    {
      word: "Bard",
    },
    {
      word: "Machinist",
    },
    {
      word: "Black Mage",
    },
    { word: "Summoner" },
    {
      word: "Red Mage",
    },
    { word: "Blue Mage" },
    {
      word: "Gunbreaker",
    },
    {
      word: "Dancer",
    },
    {
      word: "Marauder",
    },
    {
      word: "Gladiator",
    },
    {
      word: "Conjurer",
    },
    {
      word: "Arcanist",
    },
    {
      word: "Pugilist",
    },
    {
      word: "Lancer",
    },
    {
      word: "Rogue",
    },
    {
      word: "Archer",
    },
    {
      word: "Thaumaturge",
    },
    {
      word: "Alchemist",
    },
    {
      word: "Carpenter",
    },
    { word: "Blacksmith" },
    {
      word: "Armorer",
    },
    { word: "Goldsmith" },
    {
      word: "Leatherworker",
    },
    { word: "Weaver" },
    {
      word: "Culinarian",
    },
    {
      word: "Miner",
    },
    { word: "Botanist" },
    { word: "Fisher" },
  ],
  mainCharacterFirstNames: [
    { word: "Y'shtola" },
    { word: "Thancred" },
    {
      word: "Urianger",
    },
    {
      word: "Alphinaud",
    },
    {
      word: "Alisaie",
    },
    {
      word: "Minfilia",
    },
    {
      word: "Tataru",
    },
    {
      word: "Yda",
    },
    {
      word: "Papalymo",
    },
    { word: "Estinien" },
    { word: "Aymeric" },
    { word: "Haurchefant" },
    { word: "Yugiri" },

    { word: "Lyse" },

    {
      word: "Raubahn",
    },

    {
      word: "Kan-E-Senna",
    },

    { word: "Merlwyb" },

    {
      word: "Nanamo",
    },
  ],
  mainLocations: [
    {
      word: "Limsa Lominsa",
    },
    {
      word: "Ul'dah",
    },
    {
      word: "Gridania",
    },
    {
      word: "Ishgard",
    },
    {
      word: "Kugane",
    },
    {
      word: "Idyllshire",
    },
    {
      word: "Rhalgr's Reach",
    },
    {
      word: "The Crystarium",
    },
    {
      word: "Eulmore",
    },
    {
      word: "The Rising Stones",
    },
    {
      word: "The Waking Sands",
    },
    {
      word: "The Firmament",
    },
    {
      word: "The Gold Saucer",
    },
    {
      word: "The Ruby Sea",
    },
    {
      word: "Yanxia",
    },
  ],

  primalWords: [
    {
      word: "Ifrit",
    },
    {
      word: "Titan",
    },
    {
      word: "Garuda",
    },
    {
      word: "Leviathan",
    },
    {
      word: "Ramuh",
    },
    {
      word: "Shiva",
    },
    {
      word: "Ravana",
    },
    {
      word: "Bismarck",
    },
    {
      word: "Alexander",
    },
    {
      word: "Odin",
    },
    {
      word: "Ultima Weapon",
    },
    {
      word: "Sephirot",
    },
    {
      word: "Nidhogg",
    },
    {
      word: "Sophia",
    },
    {
      word: "Susano",
    },
    {
      word: "Byakko",
    },
    {
      word: "Tsukuyomi",
    },
    {
      word: "Suzaku",
    },
    {
      word: "Seiryu",
    },
    {
      word: "Titania",
    },
  ],
  spellWords: [
    { word: "Fire" },
    {
      word: "Blizzard",
    },
    {
      word: "Thunder",
    },
    {
      word: "Aero",
    },
    {
      word: "Stone",
    },
    {
      word: "Water",
    },
    {
      word: "Fira",
    },
    {
      word: "Blizzara",
    },
    {
      word: "Thundara",
    },
    {
      word: "Aerora",
    },
    {
      word: "Stonega",
    },
    {
      word: "Watera",
    },
    {
      word: "Firaga",
    },
    {
      word: "Blizzaga",
    },
    {
      word: "Thundaga",
    },
    {
      word: "Aeroga",
    },
    {
      word: "Quake",
    },
    {
      word: "Tornado",
    },
    {
      word: "Meteor",
    },
    {
      word: "Ultima",
    },
    {
      word: "Cure",
    },
    {
      word: "Curaga",
    },
    {
      word: "Protect",
    },
    {
      word: "Shell",
    },
    {
      word: "Reflect",
    },
    {
      word: "Regen",
    },
    {
      word: "Haste",
    },
    {
      word: "Slow",
    },
    {
      word: "Stop",
    },
    {
      word: "Bio",
    },
  ],

  gameMechanics: [
    {
      word: "Chocobo",
    },
    {
      word: "Limit Break",
    },
    {
      word: "Materia",
    },
    {
      word: "Glamour",
    },
    {
      word: "Mount",
    },

    {
      word: "Duty Finder",
    },
    {
      word: "Teleport",
    },
    {
      word: "Aetherial Manipulation",
    },
    {
      word: "Triple Triad",
    },
  ],
};

const wordInProgress = document.querySelector(".word-in-progress");
const guessInput = document.querySelector(".letter");
const playAgainButton = document.querySelector(".btn-play-again");
const guessButton = document.querySelector(".btn-guess");
const hintButton = document.querySelector(".btn-hint");
const message = document.querySelector(".message");
const remainingGuessesSpan = document.querySelector(".remaining span");
const guessedLettersElement = document.querySelector(".guessed-letters");

let word;
let remainingGuesses = 10; // Initialize remaining guesses
let guessedLetters = []; // Initialize guessed letters array
let hintUsed = false; // Initialize hint usage flag

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
  console.log(`Hint: ${hint}`); // Display the hint for debugging purposes
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
  remainingGuessesSpan.classList.remove("hide");
  guessedLettersElement.classList.remove("hide");
  hintUsed = false; // Reset hint usage
  hintButton.disabled = false; // Enable hint button
});

const startOver = function () {
  guessButton.classList.add("hide");
  remainingGuessesSpan.classList.add("hide");
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
