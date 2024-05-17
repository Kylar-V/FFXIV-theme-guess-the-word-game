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

const hintButton = document.querySelector(".btn-hint");

hintButton.addEventListener("click", function () {
  displayHint();
});

const displayHint = function () {
  const currentCategory = getCurrentCategory();
  const currentWord = word; // Assuming 'word' holds the current word
  const hint = hints[currentCategory].find(
    (hintObj) => hintObj.word === currentWord
  ).hint;

  alert(`Hint: ${hint}`);
};

const getCurrentCategory = function () {
  if (classesWords.includes(word)) {
    return "classesWords";
  } else if (mainCharacterFirstNames.includes(word)) {
    return "mainCharacterFirstNames";
  } else if (mainLocations.includes(word)) {
    return "mainLocations";
  } else if (primalWords.includes(word)) {
    return "primalWords";
  } else if (spellWords.includes(word)) {
    return "spellWords";
  } else if (gameMechanics.includes(word)) {
    return "gameMechanics";
  }
  return "";
};

const hints = {
  classesWords: [
    {
      word: "Paladin",
      hint: "Masters of sword and shield, defenders of justice.",
    },
    {
      word: "Warrior",
      hint: "Fierce warriors wielding massive axes, embodying strength and resilience.",
    },
    {
      word: "Dark Knight",
      hint: "Wielders of darkness, clad in imposing armor, seeking redemption.",
    },
    {
      word: "White Mage",
      hint: "Healers who harness the power of light, bringing life and protection.",
    },
    {
      word: "Scholar",
      hint: "Students of ancient tomes, blending magic and knowledge to aid allies.",
    },
    {
      word: "Astrologian",
      hint: "Celestial healers who read the stars, bringing balance and fortune.",
    },
    {
      word: "Monk",
      hint: "Martial artists who harness their inner strength, delivering devastating blows.",
    },
    {
      word: "Dragoon",
      hint: "Masterful spear wielders, leaping into battle with precision and agility.",
    },
    {
      word: "Ninja",
      hint: "Stealthy assassins who strike from the shadows with deadly precision.",
    },
    {
      word: "Samurai",
      hint: "Honorable warriors who follow the way of the sword, embodying discipline and tradition.",
    },
    {
      word: "Bard",
      hint: "Musical storytellers who inspire allies and hinder foes with their melodies.",
    },
    {
      word: "Machinist",
      hint: "Inventive engineers who wield firearms and deploy mechanical contraptions.",
    },
    {
      word: "Black Mage",
      hint: "Masters of destructive magic, harnessing the power of the elements to devastate foes.",
    },
    {
      word: "Summoner",
      hint: "Channelers of primal forces, summoning powerful beings to aid them in battle.",
    },
    {
      word: "Red Mage",
      hint: "Versatile spellcasters who wield both black and white magic with finesse.",
    },
    {
      word: "Blue Mage",
      hint: "Adaptive learners who master the abilities of creatures they encounter.",
    },
    {
      word: "Gunbreaker",
      hint: "Gunblade-wielding fighters who balance offense and defense with precision.",
    },
    {
      word: "Dancer",
      hint: "Elegant performers who use dance to both inspire allies and disrupt enemies.",
    },
    {
      word: "Marauder",
      hint: "Brutal berserkers who wield greataxes, charging into battle with reckless abandon.",
    },
    {
      word: "Gladiator",
      hint: "Skilled swordsmen who fight with honor and discipline, wielding shields for defense.",
    },
    {
      word: "Conjurer",
      hint: "Nurturers of life and protectors of nature, using elemental magic to heal and protect.",
    },
    {
      word: "Arcanist",
      hint: "Scholars of the arcane who summon and control mystical creatures to do their bidding.",
    },
    {
      word: "Pugilist",
      hint: "Martial artists who rely on hand-to-hand combat, using speed and agility to outmaneuver foes.",
    },
    {
      word: "Lancer",
      hint: "Spearmen who excel in piercing attacks, striking swiftly and precisely.",
    },
    {
      word: "Rogue",
      hint: "Stealthy opportunists who strike from the shadows with deadly precision and cunning.",
    },
    {
      word: "Archer",
      hint: "Skilled marksmen who rain down arrows upon their enemies with deadly accuracy.",
    },
    {
      word: "Thaumaturge",
      hint: "Masters of destructive magic, specializing in elemental spells to obliterate their foes.",
    },
    {
      word: "Alchemist",
      hint: "Crafters of potions and elixirs, blending science and magic to create powerful concoctions.",
    },
    {
      word: "Carpenter",
      hint: "Artisans who shape and craft wood, creating sturdy structures and weapons.",
    },
    {
      word: "Blacksmith",
      hint: "Masters of metalworking, forging powerful weapons and armor for allies.",
    },
    {
      word: "Armorer",
      hint: "Craftsmen who specialize in creating durable armor, protecting allies on the battlefield.",
    },
    {
      word: "Goldsmith",
      hint: "Artists who shape precious metals, creating elegant jewelry and accessories.",
    },
    {
      word: "Leatherworker",
      hint: "Artisans who work with leather, creating flexible and protective gear for adventurers.",
    },
    {
      word: "Weaver",
      hint: "Masters of fabric and thread, creating intricate garments and tapestries.",
    },
    {
      word: "Culinarian",
      hint: "Cooks who prepare delicious meals and beverages, providing sustenance and buffs to allies.",
    },
    {
      word: "Miner",
      hint: "Gatherers of valuable minerals and ores, supplying raw materials for crafting and industry.",
    },
    {
      word: "Botanist",
      hint: "Harvesters of plants and herbs, gathering resources for crafting and alchemy.",
    },
    {
      word: "Fisher",
      hint: "Anglers who reel in fish and other aquatic creatures, providing food and resources.",
    },
  ],

  mainCharacterFirstNames: [
    {
      word: "Y'shtola",
      hint: "A wise and powerful sorceress of the Scions of the Seventh Dawn.",
    },
    {
      word: "Thancred",
      hint: "A charming rogue and skilled gunbreaker of the Scions.",
    },
    {
      word: "Urianger",
      hint: "An enigmatic astrologian with a deep knowledge of the arcane.",
    },
    {
      word: "Alphinaud",
      hint: "A brilliant young strategist and co-founder of the Scions.",
    },
    {
      word: "Alisaie",
      hint: "A fiery and determined twin sister of Alphinaud, skilled in red magic.",
    },
    {
      word: "Minfilia",
      hint: "The former leader of the Scions, known as the Antecedent.",
    },
    {
      word: "Tataru",
      hint: "A cheerful and resourceful Lalafell, the receptionist of the Scions.",
    },
    {
      word: "Yda",
      hint: "A lively and energetic pugilist, later revealed to have another identity.",
    },
    {
      word: "Papalymo",
      hint: "A wise and caring thaumaturge, partner of Yda.",
    },
    {
      word: "Estinien",
      hint: "A stoic and powerful dragoon of Ishgard, known as the Azure Dragoon.",
    },
    {
      word: "Aymeric",
      hint: "The charismatic Lord Commander of the Temple Knights of Ishgard.",
    },
    {
      word: "Haurchefant",
      hint: "A noble and kind-hearted knight of Ishgard who befriends the Warrior of Light.",
    },
    {
      word: "Yugiri",
      hint: "A skilled ninja from Doma, loyal to her homeland.",
    },
    {
      word: "Lyse",
      hint: "A freedom fighter from Ala Mhigo, initially known by another name.",
    },
    {
      word: "Raubahn",
      hint: "The general of the Immortal Flames and a close friend of Nanamo.",
    },
    {
      word: "Kan-E-Senna",
      hint: "The wise and gentle Elder Seedseer of Gridania.",
    },
    {
      word: "Merlwyb",
      hint: "The fierce and determined Admiral of Limsa Lominsa.",
    },
    { word: "Nanamo",
      hint: "The beloved Sultana of Ul'dah." },

    { word: "Hien", 
      hint: "The courageous and noble Lord of Doma." },
    {
      word: "Gosetsu",
      hint: "A loyal samurai who serves Doma with unwavering honor.",
    },
    {
      word: "Zenos",
      hint: "The ruthless and powerful crown prince of Garlemald.",
    },
    {
      word: "Emet-Selch",
      hint: "A mysterious and ancient Ascian with a hidden agenda.",
    },
    {
      word: "G'raha Tia",
      hint: "A charismatic and adventurous Miqo'te, also known as the Crystal Exarch.",
    },
    {
      word: "Crystal Exarch",
      hint: "The enigmatic leader of the Crystarium, revealed to be G'raha Tia.",
    },
  ],
  mainLocations: [
    { word: "Ul'dah", hint: "A bustling desert city-state, known for its wealth and commerce." },
    { word: "Limsa Lominsa", hint: "A maritime city-state renowned for its navy and pirates." },
    { word: "Gridania", hint: "A tranquil forest city-state, home to the Wood Wailers and conjurers." },
    { word: "Ishgard", hint: "A city-state amidst snowy mountains, ruled by the Holy See." },
    { word: "Mor Dhona", hint: "A neutral zone and adventurer's hub, home to the Scions of the Seventh Dawn." },
    { word: "Coerthas", hint: "A frigid highland region, known for its harsh climate and Dravanian threat." },
    { word: "Thanalan", hint: "A vast desert region, surrounding the city-state of Ul'dah." },
    { word: "La Noscea", hint: "A coastal region dotted with islands, home to Limsa Lominsa." },
    { word: "The Black Shroud", hint: "A dense forest region, surrounding the city-state of Gridania." },
    { word: "Dravania", hint: "A rugged region inhabited by dragons and scholars." },
    { word: "Gyr Abania", hint: "A war-torn region, striving for freedom from Garlean oppression." },
    { word: "The Far East", hint: "A distant region, home to the city-state of Kugane and Doma." },
    { word: "Kugane", hint: "A bustling port city in the Far East, known for its strict neutrality." },
    { word: "The Azim Steppe", hint: "A vast, grassy plain, home to nomadic tribes." },
    { word: "Yanxia", hint: "A region in the Far East, scarred by war and Garlean occupation." },
    { word: "The Ruby Sea", hint: "A vibrant marine region, home to pirates and the Kojin tribes." },
    { word: "Norvrandt", hint: "A realm in the First Shard, threatened by the Flood of Light." },
    { word: "The Crystarium", hint: "A city of refugees in Norvrandt, led by the Crystal Exarch." },
    { word: "Lakeland", hint: "A picturesque region in Norvrandt, reflecting a past era." },
    { word: "Amh Araeng", hint: "A desert region in Norvrandt, marked by the encroaching Light." },
    { word: "Kholusia", hint: "A mountainous region in Norvrandt, known for its mining operations." },
    { word: "The Tempest", hint: "An underwater region in Norvrandt, hiding ancient secrets." },
    { word: "Il Mheg", hint: "A whimsical fairyland in Norvrandt, ruled by the Pixies." },
    { word: "The Rak'tika Greatwood", hint: "A dense forest in Norvrandt, home to ancient ruins and secrets." },
    { word: "Eulmore", hint: "A decadent city in Norvrandt, symbolizing the excesses of the rich." },
  ],

const primalWords = [
  { word: "Ifrit", hint: "A fiery primal, summoned by the Amalj'aa, embodying the essence of fire." },
  { word: "Titan", hint: "An earth primal, summoned by the Kobolds, representing the strength of the mountains." },
  { word: "Garuda", hint: "A wind primal, summoned by the Ixal, known for her deadly gales and tempests." },
  { word: "Leviathan", hint: "A water primal, summoned by the Sahagin, ruling the seas with his massive form." },
  { word: "Ramuh", hint: "A lightning primal, summoned by the Sylphs, embodying the wrath of the storm." },
  { word: "Shiva", hint: "An ice primal, summoned by Iceheart, embodying serenity and unyielding cold." },
  { word: "Ravana", hint: "A primal of the Gnath, representing war and conquest with his many arms." },
  { word: "Bismarck", hint: "A primal of the Vanu Vanu, known as the Lord of the Mists, soaring the skies." },
  { word: "Alexander", hint: "A massive mechanical primal, embodying time and divine justice." },
  { word: "Odin", hint: "A dark knight primal, roaming the forests, feared for his blade Zantetsuken." },
  { word: "Ultima Weapon", hint: "A fearsome machine built to harness the power of captured primals." },
  { word: "Sephirot", hint: "A primal of the Warring Triad, representing the tree of life and boundless strength." },
  { word: "Nidhogg", hint: "A dragon primal driven by a centuries-long grudge and vengeance." },
  { word: "Sophia", hint: "A primal of the Warring Triad, embodying the concept of balance and wisdom." },
  { word: "Susano", hint: "A primal of the Kojin, representing storms and martial prowess." },
  { word: "Byakko", hint: "One of the Four Lords, representing the white tiger and harnessing the power of wind." },
  { word: "Tsukuyomi", hint: "A primal born of vengeance and despair, connected to the moon and night." },
  { word: "Suzaku", hint: "One of the Four Lords, representing the vermilion bird and wielding the power of fire." },
  { word: "Seiryu", hint: "One of the Four Lords, representing the azure dragon and controlling the power of water." },
  { word: "Titania", hint: "A primal of the fae, ruling over the playful and mischievous faeries." },
  { word: "Innocence", hint: "A primal representing misguided purity and light, known for its majestic form." },
  { word: "Hades", hint: "A primal associated with death and the underworld, exuding dark power." },
  { word: "Shinryu", hint: "A primal of immense draconic power, representing revenge and fury." },
  { word: "Zurvan", hint: "A primal of the Warring Triad, known as the Demon, representing time and destruction." }
],


const spellHints = [
  { spell: "Fire", hint: "A basic elemental spell that conjures flames." },
  { spell: "Blizzard", hint: "A spell that summons ice and snow to damage foes." },
  { spell: "Thunder", hint: "A spell that calls down a bolt of lightning." },
  { spell: "Aero", hint: "A spell that generates a burst of wind." },
  { spell: "Stone", hint: "A spell that hurls rocks at enemies." },
  { spell: "Water", hint: "A spell that unleashes a torrent of water." },
  { spell: "Fira", hint: "An advanced version of a fire spell." },
  { spell: "Blizzara", hint: "An advanced ice spell that deals more damage." },
  { spell: "Thundara", hint: "An advanced thunder spell with greater impact." },
  { spell: "Aerora", hint: "An advanced wind spell with increased power." },
  { spell: "Stonega", hint: "An advanced earth spell that deals significant damage." },
  { spell: "Watera", hint: "An advanced water spell with enhanced effects." },
  { spell: "Firaga", hint: "A powerful fire spell with devastating effects." },
  { spell: "Blizzaga", hint: "A powerful ice spell that causes massive damage." },
  { spell: "Thundaga", hint: "A powerful lightning spell with great destructive power." },
  { spell: "Aeroga", hint: "A powerful wind spell with extensive damage." },
  { spell: "Quake", hint: "A spell that causes an earthquake." },
  { spell: "Tornado", hint: "A spell that conjures a violent whirlwind." },
  { spell: "Meteor", hint: "A spell that calls down a meteor from the sky." },
  { spell: "Ultima", hint: "A spell known for its ultimate destructive power." },
  { spell: "Cure", hint: "A spell that restores a small amount of health." },
  { spell: "Curaga", hint: "An advanced healing spell that restores more health." },
  { spell: "Protect", hint: "A spell that boosts physical defense." },
  { spell: "Shell", hint: "A spell that boosts magical defense." },
  { spell: "Reflect", hint: "A spell that reflects magic spells back to the caster." },
  { spell: "Regen", hint: "A spell that gradually restores health over time." },
  { spell: "Haste", hint: "A spell that increases the target's speed." },
  { spell: "Slow", hint: "A spell that reduces the target's speed." },
  { spell: "Stop", hint: "A spell that halts the target's actions temporarily." },
  { spell: "Bio", hint: "A spell that inflicts poison damage over time." },
],

const gameMechanicsHints = [
  { mechanic: "Chocobo", hint: "A large, flightless bird used for transportation and combat assistance." },
  { mechanic: "Limit Break", hint: "A powerful attack that can turn the tide of battle, shared by the party." },
  { mechanic: "Materia", hint: "Magical orbs that enhance abilities when slotted into gear." },
  { mechanic: "Glamour", hint: "A system that allows players to change the appearance of their gear." },
  { mechanic: "Mount", hint: "Various creatures or vehicles players can ride for faster travel." },
  { mechanic: "Duty Finder", hint: "A matchmaking system for finding groups to tackle dungeons, trials, and raids." },
  { mechanic: "Teleport", hint: "A fast travel method that allows players to instantly move between locations." },
  { mechanic: "Aetherial Manipulation", hint: "A teleportation ability used by certain classes in combat." },
  { mechanic: "Triple Triad", hint: "A popular card game that players can play against NPCs and other players." },
],


// Adjust other functions and game logic as needed
