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
let remainingGuesses = 10; // Changed to 10

const classesWords = [
  "Paladin",
  "Warrior",
  "Dark Knight",
  "White Mage",
  "Scholar",
  "Astrologian",
  "Monk",
  "Dragoon",
  "Ninja",
  "Samurai",
  "Bard",
  "Machinist",
  "Black Mage",
  "Summoner",
  "Red Mage",
  "Blue Mage",
  "Gunbreaker",
  "Dancer",
  "Marauder",
  "Gladiator",
  "Conjurer",
  "Arcanist",
  "Pugilist",
  "Lancer",
  "Rogue",
  "Archer",
  "Thaumaturge",
  "Alchemist",
  "Carpenter",
  "Blacksmith",
  "Armorer",
  "Goldsmith",
  "Leatherworker",
  "Weaver",
  "Culinarian",
  "Miner",
  "Botanist",
  "Fisher",
];

const mainCharacterFirstNames = [
  "Y'shtola",
  "Thancred",
  "Urianger",
  "Alphinaud",
  "Alisaie",
  "Minfilia",
  "Tataru",
  "Yda",
  "Papalymo",
  "Estinien",
  "Aymeric",
  "Haurchefant",
  "Yugiri",
  "Lyse",
  "Raubahn",
  "Kan-E-Senna",
  "Merlwyb",
  "Nanamo",
  "Hien",
  "Gosetsu",
  "Zenos",
  "Emet-Selch",
  "G'raha Tia",
  "Crystal Exarch",
];

const mainLocations = [
  "Limsa Lominsa",
  "Ul'dah",
  "Gridania",
  "Ishgard",
  "Kugane",
  "Idyllshire",
  "Rhalgr's Reach",
  "The Crystarium",
  "Eulmore",
  "The Rising Stones",
  "The Waking Sands",
  "The Firmament",
  "The Gold Saucer",
  "The Ruby Sea",
  "Mor Dhona",
  "The Lochs",
  "The Rak'tika Greatwood",
  "The Tempest",
  "Amh Araeng",
  "The Azim Steppe",
  "The Dravanian Hinterlands",
  "Coerthas Western Highlands",
  "The Black Shroud",
  "La Noscea",
  "Thanalan",
];

const primalWords = [
  "Ifrit",
  "Titan",
  "Garuda",
  "Leviathan",
  "Ramuh",
  "Shiva",
  "Ravana",
  "Bismarck",
  "Alexander",
  "Odin",
  "Ultima Weapon",
  "Sephirot",
  "Nidhogg",
  "Sophia",
  "Susano",
  "Byakko",
  "Tsukuyomi",
  "Suzaku",
  "Seiryu",
  "Titania",
  "Innocence",
  "Hades",
  "Shinryu",
  "Zurvan",
];

const spellWords = [
  "Fire",
  "Blizzard",
  "Thunder",
  "Aero",
  "Stone",
  "Water",
  "Fira",
  "Blizzara",
  "Thundara",
  "Aerora",
  "Stonega",
  "Watera",
  "Firaga",
  "Blizzaga",
  "Thundaga",
  "Aeroga",
  "Quake",
  "Tornado",
  "Meteor",
  "Ultima",
  "Cure",
  "Curaga",
  "Protect",
  "Shell",
  "Reflect",
  "Regen",
  "Haste",
  "Slow",
  "Stop",
  "Bio",
];

const gameMechanics = [
  "Chocobo",
  "Limit Break",
  "Materia",
  "Glamour",
  "Mount",
  "Duty Finder",
  "Teleport",
  "Aetherial Manipulation",
  "Triple Triad",
];

const getWord = function () {
  const categories = [
    classesWords,
    mainCharacterFirstNames,
    mainLocations,
    primalWords,
    spellWords,
    gameMechanics,
  ];
  const randomCategoryIndex = Math.floor(Math.random() * categories.length);
  const selectedCategory = categories[randomCategoryIndex];
  const randomIndex = Math.floor(Math.random() * selectedCategory.length);
  word = selectedCategory[randomIndex].trim();

  placeholder(word);
};

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

  // Re-enable the input field and reset the game state when the player clicks the "Play Again" button
  playAgainButton.addEventListener(
    "click",
    function () {
      guessedLetters = [];
      remainingGuesses = 10; // Reset to 10
      remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
      guessedLettersElement.innerHTML = "";
      message.innerText = "";
      getWord(); // Call getWord to select a new word
      placeholder(word);

      // Re-enable the input field
      letterInput.disabled = false;

      // Hide the "Play Again" button
      playAgainButton.classList.add("hide");

      // Show the guess button and remaining guesses element
      guessLetterButton.classList.remove("hide");
      remainingGuessesElement.classList.remove("hide");
      guessedLettersElement.classList.remove("hide");
    },
    { once: true }
  ); // Use the "once" option to ensure the event listener is only added once
};

// Initial setup
getWord();

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

const hintButton = document.querySelector(".btnhint");

hintButton.addEventListener("click", function () {
  displayHint();
});

const displayHint = function() {
  const currentCategory = getCurrentCategory();
}

