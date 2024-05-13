const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

let word = "magnolia";
let guessedLetters = [];
let remainingGuesses = 12;

// Arrays for words related to classes, items ad characters//
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
  "Zenos",
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
  const wordArray = wordUpper.split("");
  const revealWord = [];
  for (const letter of wordArray) {
    if (guessedLetters.includes(letter)) {
      revealWord.push(letter.toUpperCase());
    } else {
      revealWord.push("●");
    }
  }

  wordInProgress.innerText = revealWord.join("");
  checkIfWin();
};

const updateGuessesRemaining = function (guess) {
  const upperWord = word.toUpperCase();
  if (!upperWord.includes(guess)) {
    message.innerText = `Sorry, but this word doesn't have a ${guess} in it.`;
    remainingGuesses -= 1;
  } else {
    message.innerText = `Nice one Adventurer! You guessed correctly! The word has the letter ${guess}.`;
  }

  if (remainingGuesses === 0) {
    message.innerHTML = `Quest failed! The word was <span class="highlight">${word}</span>.`;
    startOver();
  } else if (remainingGuesses === 1) {
    remainingGuessesSpan.innerText = `${remainingGuesses} guess`;
  } else {
    remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
  }
};

const checkIfWin = function () {
  if (word.toUpperCase() === wordInProgress.innerText) {
    message.classList.add("win");
    message.innerHTML = `<p class="highlight">Congratulations Adventurer! You guessed it correctly!</p>`;
    startOver();
  }
};

const startOver = function () {
  guessLetterButton.classList.add("hide");
  remainingGuessesElement.classList.add("hide");
  guessedLettersElement.classList.add("hide");
  playAgainButton.classList.remove("hide");
};

playAgainButton.addEventListener("click", function () {
  message.classList.remove("win");
  guessedLetters = [];
  remainingGuesses = 12;
  remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
  guessedLettersElement.innerHTML = "";
  message.innerText = "";
  getWord();

  guessLetterButton.classList.remove("hide");
  playAgainButton.classList.add("hide");
  remainingGuessesElement.classList.remove("hide");
  guessedLettersElement.classList.remove("hide");
});
