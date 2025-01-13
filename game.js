const word = "PRISM";
let lives = 3;
let score = 0;
let gameRunning = true;

textInputField = document.getElementById("input-field");
letterImages = document.getElementsByClassName("letter-image");
resetGame();

function updateTexts() {
  document.getElementById("lives-text").innerHTML = lives;
  document.getElementById("score-text").innerHTML = score;
}

function resetGame() {
  for (let i = 0; i < letterImages.length; i++) {
    const letterImage = letterImages[i];
    letterImage.style.visibility = "hidden";
  }

  gameRunning = true;
  lives = 3;
  score = 0;
  updateTexts();
}

function revealLetter(letterIndex) {
  letterImages[letterIndex].style.visibility = "visible";
}

function getLetterIndexOf(letter) {
  for (let i = 0; i < word.length; i++) {
    const c = word[i];
    if (c == letter) return i;
  }

  return -1;
}

function onSubmit() {
  if (!gameRunning) return;

  let input = textInputField.value.toUpperCase();
  if (input.length != 1) {
    if (input == word) {
      score = 100;
      for (let i = 0; i < word.length; i++) {
        revealLetter(i);
      }
      alert("Correct guess! You win.");
    } else {
      lives = 0;
      alert("Wrong guess! You lost.");
    }

    gameRunning = false;
    updateTexts();
    return;
  }

  let letterIndex = getLetterIndexOf(input);

  // -1 is for invalid letter
  if (letterIndex == -1) {
    lives--;
  } else if (letterImages[letterIndex].style.visibility == "hidden") {
    score += 20;
    revealLetter(letterIndex);
  }

  updateTexts();

  if (lives == 0) {
    gameRunning = false;
    alert("You lost! You ran out of lives...");
  }

  if (score == 100) {
    gameRunning = false;
    alert("You won! Very impressive.");
  }
}
