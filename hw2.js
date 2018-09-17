
var guess = ["_", "_", "_"];


var wordList = ["FOX", "CAT", "Monkey"];


var random = Math.floor(Math.random() * 4);
var count = 8;
var word = {}

word.randomWord = function () {
  var guessWord = [];
  for (i = 0; i < wordList[random].length; i++) {
    guessWord[i] = wordList[random].charAt(i);
  }
  return guessWord;
}

word.emptyWord = function () {
  var empty = [];
  for (i = 0; i < wordList[random].length; i++) {
    empty[i] = "_"
  }
  return empty
}

correctWord = word.randomWord();
emptyArray = word.emptyWord();

// console.log(correctWord);
// console.log(emptyArray);

word.guessLetter = function (letter) {
  if (count > 0) {
    var equal = 0
    var condition = 0
    for (i = 0; i < correctWord.length; i++) {
      if (letter == correctWord[i]) {
        emptyArray[i] = letter
        condition = 1
      }
    }
    console.log(emptyArray);
    if (condition == 1) {
      console.log("Congratulations! You have the right letter!")
    } else {
      count = count - 1;
      console.log("Wrong Letter! You have " + count + " guess left!")
    }
    for (i = 0; i < correctWord.length; i++) {
      if (emptyArray[i] == correctWord[i]) {
        equal = equal + 1
      }
    }
    if (equal == correctWord.length) {
      console.log("You win!")
    }
  } else {
    console.log("You lose!")
  }
}

word.guessLetter("F");
word.guessLetter("O");
word.guessLetter("X");

