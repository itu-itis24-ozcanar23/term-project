word = "PRISM";
lives = 3;
score = 0;

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
  let input = textInputField.value;
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
    alert("You lost!");
    resetGame();
  }
}
